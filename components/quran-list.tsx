import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Chapter } from "@quranjs/api";
import React, { useEffect, useRef, useState } from "react";

type QuranListProps = {
  chapters: Chapter[];
  setSumOfVersesNumber: React.Dispatch<React.SetStateAction<number>>;
  onVersesCountChange: (chapterId: number, newVersesCount: number) => void;
};

export function QuranList({
  chapters,
  setSumOfVersesNumber,
  onVersesCountChange,
}: QuranListProps) {
  return (
    <Table className="text-lg">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Chapter</TableHead>
          <TableHead className="text-center">Surah</TableHead>
          <TableHead className="text-center whitespace-nowrap">
            Number of Verses
          </TableHead>
          <TableHead className="text-center whitespace-nowrap">
            Chapter + Number of Verses
          </TableHead>
          <TableHead className="text-center whitespace-nowrap">
            Even or Odd
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chapters.map((chapter) => (
          <ListTableRow
            chapter={chapter}
            key={chapter.id}
            setSumOfVersesNumber={setSumOfVersesNumber}
            onVersesCountChange={onVersesCountChange}
          />
        ))}
      </TableBody>
    </Table>
  );
}

const ListTableRow = ({
  chapter,
  setSumOfVersesNumber,
  onVersesCountChange,
}: {
  chapter: Chapter;
  setSumOfVersesNumber: React.Dispatch<React.SetStateAction<number>>;
  onVersesCountChange: (chapterId: number, newVersesCount: number) => void;
}) => {
  const [versesCount, setVersesCount] = useState<number | string>(
    chapter.versesCount
  );

  const prevVersesCountRef = useRef<number | string>(chapter.versesCount);

  useEffect(() => {
    setVersesCount(chapter.versesCount);
  }, [chapter.versesCount]);

  useEffect(() => {
    const prevVersesCount = prevVersesCountRef.current;
    if (prevVersesCount !== versesCount) {
      setSumOfVersesNumber(
        (prevSum) => prevSum - Number(prevVersesCount) + Number(versesCount)
      );
      prevVersesCountRef.current = versesCount;
      onVersesCountChange(chapter.id, Number(versesCount));
    }
  }, [versesCount, setSumOfVersesNumber, chapter.id, onVersesCountChange]);

  return (
    <TableRow>
      <TableCell className="text-center">{chapter.id}</TableCell>
      <TableCell className="space-x-4 flex justify-center">
        <span>{chapter.nameSimple}</span>
        <span className="text-sky-500">{chapter.nameArabic}</span>
      </TableCell>

      <TableCell className="text-center">
        <input
          type="number"
          min={1}
          value={versesCount}
          onChange={(e) => setVersesCount(e.target.value)}
          className=" text-center bg-transparent"
        />
      </TableCell>
      <TableCell className="text-center">
        {chapter.id + Number(versesCount)}
      </TableCell>
      <TableCell className="text-center font-medium">
        {(chapter.id + Number(versesCount)) % 2 === 0 ? (
          <span className="text-emerald-500">Even</span>
        ) : (
          <span className="text-amber-500">Odd</span>
        )}
      </TableCell>
    </TableRow>
  );
};
