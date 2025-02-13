"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Chapter } from "@quranjs/api";
import React from "react";

type QuranListProps = {
  chapters: Chapter[];
};

export function QuranList({ chapters }: QuranListProps) {
  return (
    <Table>
      <TableCaption>A list of chapters in Al-Qur&apos;an.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Chapter</TableHead>
          <TableHead>Surah</TableHead>
          <TableHead className="text-center">Verses Count</TableHead>
          <TableHead className="text-center">Chapter - Verses Sum</TableHead>
          <TableHead className="text-center">Even or Odd</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chapters.map((chapter) => (
          <TableRow key={chapter.id}>
            <TableCell>{chapter.id}</TableCell>
            <TableCell className="space-x-4">
              <span>{chapter.nameSimple}</span>
              <span>{chapter.nameArabic}</span>
            </TableCell>

            <TableCell className="text-center">{chapter.versesCount}</TableCell>
            <TableCell className="text-center">
              {chapter.id + chapter.versesCount}
            </TableCell>
            <TableCell className="text-center">
              {(chapter.id + chapter.versesCount) % 2 === 0 ? "Even" : "Odd"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
