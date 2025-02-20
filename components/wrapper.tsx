"use client"

import { Chapter, Verse } from "@quranjs/api"
import { useRef, useState } from "react"
import { QuranList } from "./quran-list"
import { QuranSummary } from "./quran-summary"
import { Button } from "./ui/button"
import { VerseKey319 } from "./verse-key-319"

type Props = {
  chapters: Chapter[]
  verseKey: Verse
}

export function Wrapper(props: Props) {
  const initialSumOfVersesNumber = props.chapters.reduce(
    (acc, chapter) => acc + chapter.versesCount,
    0,
  )

  const sumOfSurahNumber = props.chapters.reduce(
    (acc, chapter) => acc + chapter.id,
    0,
  )

  // ====== DEBUGGING ======
  // const sumOfOddSurahNumber = props.chapters.filter(
  //   (f) => f.id % 2 === 0
  // ).length;
  // const sumOfEvenSurahNumber = props.chapters.filter(
  //   (f) => f.id % 2 === 0
  // ).length;

  // const sumOfOddVersesNumber = props.chapters.filter(
  //   (f) => (f.versesCount + f.id) % 2 === 1,
  // ).length

  // const sumOfEvenVersesNumber = props.chapters.filter(
  //   (f) => (f.versesCount + f.id) % 2 === 0,
  // ).length

  // console.log({ sumOfOddVersesNumber, sumOfEvenVersesNumber })

  const CHECKSUM_QURAN = sumOfSurahNumber - initialSumOfVersesNumber

  const initialChaptersRef = useRef(props.chapters)

  const [sumOfVersesNumber, setSumOfVersesNumber] = useState(
    initialSumOfVersesNumber,
  )

  const [updatedChapters, setUpdatedChapters] = useState(props.chapters)

  const handleVersesCountChange = (
    chapterId: number,
    newVersesCount: number,
  ) => {
    setUpdatedChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.id === chapterId
          ? { ...chapter, versesCount: newVersesCount }
          : chapter,
      ),
    )
  }

  const handleReset = () => {
    setUpdatedChapters(initialChaptersRef.current)
    setSumOfVersesNumber(initialSumOfVersesNumber)
  }

  return (
    <div>
      <QuranSummary
        checksum={CHECKSUM_QURAN}
        chapters={updatedChapters}
        sumOfSurahNumber={sumOfSurahNumber}
        sumOfVersesNumber={sumOfVersesNumber}
      />
      <VerseKey319 verseKey={props.verseKey} />
      <QuranList
        chapters={updatedChapters}
        setSumOfVersesNumber={setSumOfVersesNumber}
        onVersesCountChange={handleVersesCountChange}
      />
      <div className="fixed bottom-2 right-2 z-20">
        <Button
          variant={"secondary"}
          onClick={handleReset}
          className="font-bold"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
