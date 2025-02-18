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
          <TableHead className="relative text-center">
            <span>Surah</span>
            <Switch
              className="absolute top-2 ml-4"
              onClick={() => setToggleBackground((prev) => (prev = !prev))}
            />
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
            Total Verses
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
            Chapter + Total Verses
          </TableHead>
          <TableHead className="whitespace-nowrap text-center">
            Parity
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
