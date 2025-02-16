import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { type Chapter } from "@quranjs/api";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

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
  const [toggleBackground, setToggleBackground] = useState(false);
  return (
    <Table className="text-lg">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Chapter</TableHead>
          <TableHead className="text-center space-x-2">
            <span>Surah</span>
            <Button
              size={"sm"}
              variant={"secondary"}
              onClick={() => setToggleBackground((prev) => (prev = !prev))}
            >
              {!toggleBackground ? "toggle" : "untoggle"}
            </Button>
          </TableHead>
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
            toggleBackground={toggleBackground}
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
  toggleBackground,
}: {
  chapter: Chapter;
  setSumOfVersesNumber: React.Dispatch<React.SetStateAction<number>>;
  onVersesCountChange: (chapterId: number, newVersesCount: number) => void;
  toggleBackground: boolean;
}) => {
  const [versesCount, setVersesCount] = useState<number | string>(
    chapter.versesCount,
  );

  const prevVersesCountRef = useRef<number | string>(chapter.versesCount);

  useEffect(() => {
    setVersesCount(chapter.versesCount);
  }, [chapter.versesCount]);

  useEffect(() => {
    const prevVersesCount = prevVersesCountRef.current;
    if (prevVersesCount !== versesCount) {
      setSumOfVersesNumber(
        (prevSum) => prevSum - Number(prevVersesCount) + Number(versesCount),
      );
      prevVersesCountRef.current = versesCount;
      onVersesCountChange(chapter.id, Number(versesCount));
    }
  }, [versesCount, setSumOfVersesNumber, chapter.id, onVersesCountChange]);

  return (
    <TableRow>
      <TableCell className="text-center">{chapter.id}</TableCell>
      <TableCell className="space-x-4 flex justify-center">
        {toggleBackground ? (
          <span
            className={cn(
              "px-2 rounded-md",
              chapter.versesCount % 2 === 0 &&
                (chapter.id + chapter.versesCount) % 2 === 1
                ? "bg-gradient-to-r from-emerald-800 to-amber-800"
                : "",
              chapter.versesCount % 2 === 1 &&
                (chapter.id + chapter.versesCount) % 2 === 0
                ? "bg-gradient-to-l from-emerald-800 to-amber-800"
                : "",
            )}
          >
            {chapter.nameSimple}
          </span>
        ) : (
          <span>{chapter.nameSimple}</span>
        )}
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
