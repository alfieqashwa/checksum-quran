"use client"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export const CustomTooltip = ({
  content,
  className,
  children,
}: {
  content: string
  className?: string
  children: React.ReactNode
}) => (
  <Tooltip>
    <TooltipTrigger>{children}</TooltipTrigger>
    <TooltipContent className={cn(className)}>{content}</TooltipContent>
  </Tooltip>
)
