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

export function QuranSummary({ chapters }: { chapters: Chapter[] }) {
  const sumOfSurahNumber = chapters.reduce(
    (acc, chapter) => acc + chapter.id,
    0
  );
  const sumOfVersesNumber = chapters.reduce(
    (acc, chapter) => acc + chapter.versesCount,
    0
  );

  const sumOfOddResult = chapters.reduce(
    (acc, chapter) =>
      acc +
      ((chapter.id + chapter.versesCount) % 2 === 1
        ? chapter.id + chapter.versesCount
        : 0),
    0
  );
  const sumOfEvenResult = chapters.reduce(
    (acc, chapter) =>
      acc +
      ((chapter.id + chapter.versesCount) % 2 === 0
        ? chapter.id + chapter.versesCount
        : 0),
    0
  );
  return (
    <Table className="my-12">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Sum of Surah Number</TableHead>
          <TableHead className="text-center">Sum of Verses Number</TableHead>
          <TableHead className="text-center">Sum of Odd Result</TableHead>
          <TableHead className="text-center">Sum of Even Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableCell className="text-center">{sumOfSurahNumber}</TableCell>
        <TableCell className="text-center">{sumOfVersesNumber}</TableCell>
        <TableCell className="text-center">{sumOfOddResult}</TableCell>
        <TableCell className="text-center">{sumOfEvenResult}</TableCell>
      </TableBody>
    </Table>
  );
}
