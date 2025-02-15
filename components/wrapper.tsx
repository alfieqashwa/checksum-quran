"use client";

import { Chapter } from "@quranjs/api";
import { QuranSummary } from "./quran-summary";
import { QuranList } from "./quran-list";

export function Wrapper({ chapters }: { chapters: Chapter[] }) {
  return (
    <>
      <QuranSummary chapters={chapters} />
      <QuranList chapters={chapters} />
    </>
  );
}
