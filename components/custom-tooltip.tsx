"use client"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export const CustomTooltip = ({
  content,
  side = "top",
  className,
  children,
}: {
  content: string | React.ReactNode
  side?: "top" | "right" | "bottom" | "left" | undefined
  className?: string
  children: React.ReactNode
}) => (
  <Tooltip>
    <TooltipTrigger>{children}</TooltipTrigger>
    <TooltipContent
      side={side}
      className={cn("bg-muted font-semibold text-foreground", className)}
    >
      {content}
    </TooltipContent>
  </Tooltip>
)
