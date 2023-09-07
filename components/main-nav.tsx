"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import * as React from "react"

import { MobileNav } from "@/components/mobile-nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Cross1Icon, Cross2Icon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import Image from "next/image"
import { MainNavItem } from "types"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const { theme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center hidden space-x-2 md:flex">
        <Image
          src={`/images/icons/logo${theme === 'light' ? 'black' : ''}.svg`}
          alt={"Rescene Logo"}
          width={"16"}
          height={"16"}
          className="bg-white rounded-full"
        />
        &nbsp;
        <span className="hidden font-bold sm:inline-block font-lora">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Cross1Icon /> : <Cross2Icon />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <div className="w-full shrink-0"/>
      {/* <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 shrink-0">
        <Link href="https://rescene.ai" className="items-center hidden space-x-2 md:flex">
          <span className="flex-row hidden font-bold underline whitespace-normal sm:inline-block font-lora">
            Go back to Rescene.ai
          </span>
        </Link>
      </div> */}
    </div>
  )
}
