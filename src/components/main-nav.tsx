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
    { name: t("visa"), href: "/services/visa" },
    { name: t("insurance"), href: "/insurance" },
    { name: t("blog"), href: "/blog" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all bg-white  duration-300",
        isScrolled ? "shadow-lg" : "  md:mt-[35px]",
      )}
    >
      <div className="container mx-auto md:max-w-7xl">
        <div className="flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href={`/${lang}`} className="relative z-50 transition-opacity hover:opacity-90">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z3nO6OxIrddSITqWdFHcqZYvkdt7l7.png"
              alt="Enjaz Logo"
              width={150}
              height={50}
              priority
              className={cn("h-auto w-32 transition-all")}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-6`}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-[#14697d]",
                      activeLink === item.href
                        ? "text-[#14697d] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#14697d] after:content-['']"
                        : "text-zinc-600",
                    )}
                    onClick={() => setActiveLink(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <LanguageSwitcher currentLang={lang} c={"text-[#333]"} />
            </ul>
          </div>

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
                          activeLink === item.href ? "text-[#14697d]" : "text-zinc-600",
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

