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
    <Table className="text-lg">
      <TableCaption>A list of chapters in Al-Qur&apos;an.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Chapter</TableHead>
          <TableHead>Surah</TableHead>
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
          <TableRow key={chapter.id}>
            <TableCell>{chapter.id}</TableCell>
            <TableCell className="space-x-4">
              <span>{chapter.nameSimple}</span>
              <span className="text-sky-500">{chapter.nameArabic}</span>
            </TableCell>

            <TableCell className="text-center">{chapter.versesCount}</TableCell>
            <TableCell className="text-center">
              {chapter.id + chapter.versesCount}
            </TableCell>
            <TableCell className="text-center font-bold">
              {(chapter.id + chapter.versesCount) % 2 === 0 ? (
                <span className="text-emerald-500">Even</span>
              ) : (
                <span className="text-amber-500">Odd</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
