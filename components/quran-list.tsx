import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { type Chapter } from "@quranjs/api"
import React, { useEffect, useRef, useState } from "react"
import { Switch } from "./ui/switch"

type QuranListProps = {
  chapters: Chapter[]
  setSumOfVersesNumber: React.Dispatch<React.SetStateAction<number>>
  onVersesCountChange: (chapterId: number, newVersesCount: number) => void
}

export function QuranList({
  chapters,
  setSumOfVersesNumber,
  onVersesCountChange,
}: QuranListProps) {
  const [toggleBackground, setToggleBackground] = useState(false)
  return (
    <Table className="text-lg">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Chapter</TableHead>
          <TableHead className="space-x-4 text-center">
            <span>Surah</span>
            <Switch
              onClick={() => setToggleBackground((prev) => (prev = !prev))}
            />
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
            Number of Verses
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
            Chapter + Number of Verses
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
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
  )
}

const ListTableRow = ({
  chapter,
  setSumOfVersesNumber,
  onVersesCountChange,
  toggleBackground,
}: {
  chapter: Chapter
  setSumOfVersesNumber: React.Dispatch<React.SetStateAction<number>>
  onVersesCountChange: (chapterId: number, newVersesCount: number) => void
  toggleBackground: boolean
}) => {
  const [versesCount, setVersesCount] = useState<number | string>(
    chapter.versesCount,
  )

  const prevVersesCountRef = useRef<number | string>(chapter.versesCount)

  useEffect(() => {
    setVersesCount(chapter.versesCount)
  }, [chapter.versesCount])

  useEffect(() => {
    const prevVersesCount = prevVersesCountRef.current
    if (prevVersesCount !== versesCount) {
      setSumOfVersesNumber(
        (prevSum) => prevSum - Number(prevVersesCount) + Number(versesCount),
      )
      prevVersesCountRef.current = versesCount
      onVersesCountChange(chapter.id, Number(versesCount))
    }
  }, [versesCount, setSumOfVersesNumber, chapter.id, onVersesCountChange])

  const event2Odd =
    chapter.versesCount % 2 === 0 &&
    (chapter.id + chapter.versesCount) % 2 === 1

  const odd2Even =
    chapter.versesCount % 2 === 1 &&
    (chapter.id + chapter.versesCount) % 2 === 0

  return (
    <TableRow>
      <TableCell className="text-center">{chapter.id}</TableCell>
      <TableCell className="flex justify-center space-x-4">
        {toggleBackground ? (
          <span
            className={cn(
              "rounded-md px-4",
              event2Odd ? "bg-gradient-to-r from-emerald-800 to-amber-800" : "",
              odd2Even ? "bg-gradient-to-l from-emerald-800 to-amber-800" : "",
            )}
          >
            {chapter.nameSimple}
          </span>
        ) : (
          <span>{chapter.nameSimple}</span>
        )}
        <span
          className={cn(
            "font-bold tracking-wider",
            toggleBackground && event2Odd ? "text-sky-400" : "",
            toggleBackground && odd2Even ? "text-sky-400" : "",
          )}
        >
          {chapter.nameArabic}
        </span>
      </TableCell>

      <TableCell className="text-center">
        <input
          type="number"
          min={1}
          value={versesCount}
          onChange={(e) => setVersesCount(e.target.value)}
          className="bg-transparent text-center"
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
  )
}
