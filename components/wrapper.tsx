"use client";

import { Chapter, Verse } from "@quranjs/api";
import { useRef, useState } from "react";
import { QuranList } from "./quran-list";
import { QuranSummary } from "./quran-summary";
import { Button } from "./ui/button";
import { VerseKey319 } from "./verse-key-319";

type Props = {
  chapters: Chapter[];
  verseKey: Verse;
};

export function Wrapper(props: Props) {
  const initialSumOfVersesNumber = props.chapters.reduce(
    (acc, chapter) => acc + chapter.versesCount,
    0
  );

  const initialChaptersRef = useRef(props.chapters);

  const [sumOfVersesNumber, setSumOfVersesNumber] = useState(
    initialSumOfVersesNumber
  );

  const [updatedChapters, setUpdatedChapters] = useState(props.chapters);

  const handleVersesCountChange = (
    chapterId: number,
    newVersesCount: number
  ) => {
    setUpdatedChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.id === chapterId
          ? { ...chapter, versesCount: newVersesCount }
          : chapter
      )
    );
  };

  const handleReset = () => {
    setUpdatedChapters(initialChaptersRef.current);
    setSumOfVersesNumber(initialSumOfVersesNumber);
  };

  return (
    <div>
      <QuranSummary
        chapters={updatedChapters}
        sumOfVersesNumber={sumOfVersesNumber}
      />
      <VerseKey319 verseKey={props.verseKey} />
      <QuranList
        chapters={updatedChapters}
        setSumOfVersesNumber={setSumOfVersesNumber}
        onVersesCountChange={handleVersesCountChange}
      />
      <div className="fixed z-20 bottom-4 right-4">
        <Button
          size={"lg"}
          variant={"secondary"}
          onClick={handleReset}
          className="font-bold"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
