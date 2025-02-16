import { cn } from "@/lib/utils"

import { type Chapter } from "@quranjs/api"
import React from "react"

type QuranSummaryProps = {
  checksum: number
  chapters: Chapter[]
  sumOfSurahNumber: number
  sumOfVersesNumber: number
}
export function QuranSummary({
  checksum,
  chapters,
  sumOfSurahNumber,
  sumOfVersesNumber,
}: QuranSummaryProps) {
  const sumOfOddResult = chapters.reduce(
    (acc, chapter) =>
      acc +
      ((chapter.id + chapter.versesCount) % 2 === 1
        ? chapter.id + chapter.versesCount
        : 0),
    0,
  )
  const sumOfEvenResult = chapters.reduce(
    (acc, chapter) =>
      acc +
      ((chapter.id + chapter.versesCount) % 2 === 0
        ? chapter.id + chapter.versesCount
        : 0),
    0,
  )
  return (
    <div className="my-12 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
      <Section>
        <p>Sum of Surah Number</p>
        <p className="text-foreground">{sumOfSurahNumber}</p>
      </Section>
      <Section>
        <p>Sum of Number of Verses</p>
        <p
          className={cn(
            sumOfVersesNumber !== sumOfEvenResult ||
              sumOfSurahNumber - sumOfVersesNumber !== checksum
              ? "text-red-500"
              : "text-foreground",
          )}
        >
          {sumOfVersesNumber}
        </p>
      </Section>
      <Section>
        <p>Sum of Odd Result</p>
        <p
          className={cn(
            sumOfSurahNumber !== sumOfOddResult
              ? "text-red-500"
              : "text-amber-500",
          )}
        >
          {sumOfOddResult}
        </p>
      </Section>
      <Section>
        <p>Sum of Even Result</p>
        <p
          className={cn(
            sumOfVersesNumber !== sumOfEvenResult ||
              sumOfSurahNumber - sumOfVersesNumber !== checksum
              ? "text-rose-500"
              : "text-emerald-500",
          )}
        >
          {sumOfEvenResult}
        </p>
      </Section>
    </div>
  )
}

const Section = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => (
  <section
    className={cn(
      "space-y-2 rounded-md border-2 p-4 text-center text-sm font-semibold text-muted-foreground shadow-md xl:whitespace-nowrap xl:p-8 xl:text-lg xl:font-bold",
      className,
    )}
  >
    {children}
  </section>
)
