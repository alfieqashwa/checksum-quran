"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "./ui/button"

export function LinkPage() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="fixed right-2 top-2 z-50">
      <Link
        href={pathname === "/about" ? "/" : "/about"}
        className={cn(
          buttonVariants({ variant: "secondary", size: "lg" }),
          "font-bold",
        )}
      >
        {pathname === "/about" ? "Home" : "About"}
      </Link>
    </div>
  )
}
