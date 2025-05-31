"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLocale, useTranslations } from "next-intl"

export function MainNav() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const lang = useLocale()
  const isRTL = lang === "ar"
  const t = useTranslations("nav")

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("business"), href: "/business" },
    { name: t("consultancy"), href: "/services/consultancy" },
    // { name: t("visa"), href: "/services/visa" },
    // { name: t("insurance"), href: "/insurance" },
    // { name: t("blog"), href: "/blog" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all bg-white  duration-300",
        isScrolled ? "shadow-lg" : "  md:mt-[35px]",
      )}
      dir="ltr"
    >
      <div className="container mx-auto md:max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:space-x-8 w-full md:rtl:flex-row-reverse md:ltr:flex-row">
            <Link href={`/${lang}`} className="relative z-50 transition-opacity hover:opacity-90">
              <Image
                src="/logo.svg"
                alt="Headlinks Logo"
                width={150}
                height={50}
                priority
                className={cn("h-auto w-32 transition-all")}
              />
            </Link>
            <ul className={`flex items-center gap-4 ${isRTL ? "space-x-reverse" : ""} space-x-6`}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-[#1289A6]",
                      activeLink === item.href
                        ? "text-[#1289A6] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#1289A6] after:content-['']"
                        : "text-zinc-600",
                    )}
                    onClick={() => setActiveLink(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row rtl:flex-row-reverse" >
              <Link
                href={`/blog`}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-[#1289A6] px-4 flex items-center",
                  "text-zinc-600",
                )}
              // onClick={() => setActiveLink(item.href)}
              >
                {t("blog")}
                {/* {item.name} */}
              </Link>
              <LanguageSwitcher currentLang={lang} c={"text-[#333]"} />
            </div>
          </div>

          <Link href={`/${lang}`} className="relative z-50 hover:opacity-90 elative   rounded-lg p-2 transition-colors md:hidden">
            <Image
              src="/logo.svg"
              alt="Headlinks Logo"
              width={150}
              height={50}
              priority
              className={cn("h-auto w-32 transition-all")}
            />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className={cn("relative z-50 rounded-lg p-2 transition-colors md:hidden", " bg-white/10 hover:bg-white/20")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isRTL ? "فتح القائمة" : "Toggle menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out md:hidden",
              isMobileMenuOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full",
            )}
          >
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto px-4 py-24">
                <ul className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={cn(
                          "block rounded-lg p-3 text-lg font-medium transition-all hover:bg-zinc-50",
                          activeLink === item.href ? "text-[#1289A6]" : "text-zinc-600",
                        )}
                        onClick={() => {
                          setActiveLink(item.href)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="mx-4">
                    <LanguageSwitcher currentLang={lang} c="text-zinc-600" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-30 bg-black/20 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>
    </nav>
  )
}

