import { cn } from "@/lib/utils"
import { Chapter } from "@quranjs/api"
import { ChevronRight, Minus, Plus } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { CustomTooltip } from "./custom-tooltip"
import { Button } from "./ui/button"
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
  const [versesCount, setVersesCount] = useState<number>(chapter.versesCount)

  const prevVersesCountRef = useRef<number>(chapter.versesCount)

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

  const handleIncrement = () => {
    setVersesCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setVersesCount((prev) => Math.max(1, prev - 1))
  }

  return (
    <TableRow>
      <TableCell className="text-center">
        <span className="rounded-md bg-muted px-3 py-1.5">{chapter.id}</span>
      </TableCell>
      <TableCell className="text-center">
        <p className="mx-auto flex w-[120px] flex-col items-center justify-center space-y-1 whitespace-nowrap">
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
              side="right"
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
        </p>
      </TableCell>

      <TableCell className="text-center">
        <div className="flex items-center justify-center space-x-6">
          <Button
            type="button"
            variant={"outline"}
            onClick={handleDecrement}
            className="rounded-lg px-3 py-1 font-bold"
          >
            <Minus />
          </Button>
          <p className="w-14 rounded-md bg-muted px-3 py-1.5 text-center">
            {versesCount}
          </p>
          <Button
            type="button"
            variant={"outline"}
            onClick={handleIncrement}
            className="rounded-lg px-3 py-1 font-bold"
          >
            <Plus />
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <p className="mx-auto w-14 rounded-md bg-muted px-3 py-1.5">
          {chapter.id + versesCount}
        </p>
      </TableCell>
      <TableCell className="text-center">
        <p
          className={cn(
            "mx-auto flex h-9 w-20 items-center justify-center rounded-sm font-medium",
            (chapter.id + versesCount) % 2 === 0
              ? "bg-emerald-600"
              : "bg-amber-500",
          )}
        >
          {(chapter.id + versesCount) % 2 === 0 ? "Even" : "Odd"}
        </p>
      </TableCell>
    </TableRow>
  )
}
