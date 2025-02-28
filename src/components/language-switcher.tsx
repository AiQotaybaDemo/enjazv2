"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const languages = {
  en: {
    name: "English",
    flag: "/images/en.png",
  },
  ar: {
    name: "العربية",
    flag: "/images/UAE.png",
  },
}

interface LanguageSwitcherProps {
  currentLang: any
  c: any
}

export function LanguageSwitcher({ currentLang, c = " " }: LanguageSwitcherProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: any) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  // Ensure currentLang is a valid key, default to 'en' if not
  return (
    <Link href={redirectedPathName(currentLang === "ar" ? "en" : "ar")} className="flex mr-4 rtl:flex-row-reverse bg-slate-100 px-4 py-2 rounded-lg items-center gap-2 text-sm"> 
      <Image
        src={languages[currentLang === "ar" ? "en" : "ar"].flag || "/placeholder.svg"}
        alt={languages[currentLang === "ar" ? "en" : "ar"].name}
        width={20}
        height={20}
        loading="lazy"
        className="rounded-sm"
      />
      <span className={c}>{languages[currentLang === "ar" ? "en" : "ar"].name}</span>
    </Link>
  )
}

