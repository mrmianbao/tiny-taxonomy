'use client';

import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { useTheme } from "next-themes"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const { theme } = useTheme();

  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:col-reverse md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:hidden md:flex-row md:gap-2 md:px-0">
          <p className="flex-row font-bold underline whitespace-normal sm:inline-block font-lora">
            <Link href="https://rescene.ai" className="">
              Go back to Rescene.ai
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center hidden gap-4 px-8 text-xs md:grid md:col-start-1 md:flex-row md:gap-2 md:px-0">
          <p className="flex-row font-light whitespace-normal sm:inline-block">
            <Link href="https://tx.shadcn.com/" className="">
              Built on Taxonomy
            </Link>
          </p>
        </div>
        <ModeToggle />
        <div className="flex grid flex-col items-center gap-4 px-8 text-xs md:hidden md:col-start-1 md:flex-row md:gap-2 md:px-0">
          <p className="flex-row font-light whitespace-normal sm:inline-block">
            <Link href="https://tx.shadcn.com/" className="">
              Built on Taxonomy
            </Link>
          </p>
        </div>
        <div className="flex-col items-center hidden gap-4 px-8 md:flex md:flex-row md:gap-2 md:px-0">
          <p className="flex-row font-bold underline whitespace-normal sm:inline-block font-lora">
            <Link href="https://rescene.ai" className="">
              Go back to Rescene.ai
            </Link>
          </p>
        </div>
      </div>
      
    </footer>
  )
}
