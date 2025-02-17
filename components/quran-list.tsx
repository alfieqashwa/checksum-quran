import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { type Chapter } from "@quranjs/api"
import React, { useState } from "react"
import { ListTableRow } from "./list-table-row"
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
