"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"


export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const lang = useLocale()
  const isRTL = lang === "ar"
  const t = useTranslations("testimonials")


  const defaultDict = {
    testimonials: {
      title: t("title"),
      subtitle: t("subtitle"),
      items: [
        { name: t("items.0.name"), position: t("items.0.position"), company: t("items.0.company"), content: t("items.0.content"), image: "/images/user.png" },
        { name: t("items.1.name"), position: t("items.1.position"), company: t("items.1.company"), content: t("items.1.content"), image: "/images/user.png" },
        { name: t("items.2.name"), position: t("items.2.position"), company: t("items.2.company"), content: t("items.2.content"), image:  "/images/user.png" },
      ],
    },
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % (defaultDict.testimonials.items.length)) 
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const length = defaultDict.testimonials.items.length
      return prev === 0 ? length - 1 : prev - 1
    })
  }

  const testimonials = defaultDict.testimonials.items

  useEffect(() => {
    const timer =
      !isPaused &&
      setInterval(() => {
        nextTestimonial()
      }, 3000)

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPaused, nextTestimonial]) // Added nextTestimonial to dependencies

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container  max-w-7xl" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="mx-auto mb-16 max-w-2xl text-center animate-fadeIn" style={{ animationDuration: "1s" }}>
          <div
            className="mb-4 inline-block rounded-lg bg-[#14697d]/10 px-4 py-2 transform transition-all duration-300 hover:scale-105 hover:bg-[#14697d]/20 cursor-pointer"
            onClick={() => {
              // Subtle bounce animation on click
              const element: HTMLElement | null = document.querySelector(".testimonial-title")
              element?.classList.remove("animate-bounce")
              void element?.offsetWidth // Trigger reflow
              element?.classList.add("animate-bounce")
            }}
          >
            <h4 className="testimonial-title text-lg font-semibold text-[#14697d] transition-colors duration-300 hover:text-[#14697d]/80">
              {t("title")}
            </h4>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">{t("subtitle")}</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-white p-8 shadow-lg md:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute right-6 rtl:left-6 top-6 text-[#14697d]">
              <Quote className="h-12 w-12 rotate-180 opacity-10" />
            </div>

            <div className="relative z-10 transition-opacity duration-300 ease-in-out">
              <div className="mb-8 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentIndex]?.image || "/images/user.png"}
                    alt={testimonials[currentIndex].name || ""}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 64px"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-zinc-600">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <blockquote className="mb-8 text-lg text-zinc-700">{testimonials[currentIndex].content}</blockquote>

              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={isRTL ? nextTestimonial : prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">{isRTL ? "Next" : "Previous"} testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={isRTL ? prevTestimonial : nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">{isRTL ? "Previous" : "Next"} testimonial</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

