import { cn } from "@/lib/utils"
import { Chapter } from "@quranjs/api"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { CustomTooltip } from "./custom-tooltip"
import { Input } from "./ui/input"
import { TableCell, TableRow } from "./ui/table"

export const ListTableRow = ({
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

  const content = event2Odd ? (
    <p className="flex items-center space-x-0.5 text-sm">
      <span className="text-emerald-500">even</span>
      <ChevronRight size={14} />
      <span className="text-amber-500">odd</span>
    </p>
  ) : odd2Even ? (
    <p className="flex items-center space-x-0.5 text-sm">
      <span className="text-amber-500">odd</span>
      <ChevronRight size={14} />
      <span className="text-emerald-500">even</span>
    </p>
  ) : (
    ""
  )
  return (
    <TableRow>
      <TableCell className="text-center">
        <span className="rounded-md bg-muted px-3 py-1.5">{chapter.id}</span>
      </TableCell>
      <TableCell className="flex w-[180px] flex-col items-center space-y-1 whitespace-nowrap">
        <span
          className={cn(
            "text-lg font-bold tracking-wider",
            toggleBackground && event2Odd ? "text-sky-400" : "",
            toggleBackground && odd2Even ? "text-sky-400" : "",
          )}
        >
          {chapter.nameArabic}
        </span>
        {toggleBackground ? (
          <CustomTooltip
            side="left"
            content={content}
            className="flex justify-center"
          >
            <span
              className={cn(
                "rounded-md px-3 py-1.5",
                event2Odd
                  ? "bg-gradient-to-r from-emerald-800 to-amber-800"
                  : "",
                odd2Even
                  ? "bg-gradient-to-l from-emerald-800 to-amber-800"
                  : "",
              )}
            >
              {chapter.nameSimple}
            </span>
          </CustomTooltip>
        ) : (
          <span>{chapter.nameSimple}</span>
        )}
      </TableCell>

      <TableCell className="w-[100px] text-center">
        <Input
          type="number"
          min={1}
          value={versesCount}
          onChange={(e) => setVersesCount(e.target.value)}
          className="rounded-md bg-transparent text-center text-lg font-semibold"
        />
      </TableCell>
      <TableCell className="text-center">
        <span className="rounded-md bg-muted px-3 py-1.5">
          {chapter.id + Number(versesCount)}
        </span>
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
