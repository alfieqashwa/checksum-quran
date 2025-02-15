import { cn } from "@/lib/utils";

import { type Chapter } from "@quranjs/api";
import React from "react";

type QuranSummaryProps = {
  chapters: Chapter[];
  sumOfVersesNumber: number;
};
export function QuranSummary({
  chapters,
  sumOfVersesNumber,
}: QuranSummaryProps) {
  const sumOfSurahNumber = chapters.reduce(
    (acc, chapter) => acc + chapter.id,
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
    <div className="my-12 grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
      <Section>
        <p>Sum of Surah Number</p>
        <p className="text-foreground">{sumOfSurahNumber}</p>
      </Section>
      <Section>
        <p>Sum of Number of Verses</p>
        <p className="text-foreground">{sumOfVersesNumber}</p>
      </Section>
      <Section>
        <p>Sum of Odd Result</p>
        <p className="text-amber-500">{sumOfOddResult}</p>
      </Section>
      <Section>
        <p>Sum of Even Result</p>
        <p className="text-emerald-500">{sumOfEvenResult}</p>
      </Section>
    </div>
  );
}

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <section
    className={cn(
      "space-y-2 text-center text-sm shadow-md xl:text-lg xl:whitespace-nowrap font-semibold xl:font-bold text-muted-foreground rounded-md border-2 p-4 xl:p-8",
      className
    )}
  >
    {children}
  </section>
);
