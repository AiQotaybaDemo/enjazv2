"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "@/components/consultation-dialog"
import { useLocale, useTranslations } from "next-intl"


export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const t = useTranslations("hero")
  const isRTL = useLocale() === "ar"


  useEffect(() => {
    if (videoRef.current) videoRef.current.play()
      .catch((error) => console.log("Video autoplay failed:", error))
  }, [])

  return (
    <div className="relative h-screen w-full p-4 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline controls preload="none"
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/images/new/dubai-video.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <div className="flex min-h-screen items-center justify-center mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fadeIn mb-6 pb-4 text-3xl font-bold leading-tight bg-gradient-to-r from-[#1289A6] to-[#00acd7] text-transparent bg-clip-text drop-shadow-lg sm:text-xl md:text-3xl lg:text-4xl md:px-8   ">
              {t("title")}
            </h1>

            <p className="animate-fadeIn mb-4 md:mb-6 text-md md:text-lg font-semibold text-zinc-800 drop-shadow">
              {t("subtitle")}
            </p>
            <p className="animate-fadeIn  mb-4 md:mb-6 text-sm md:text-md text-zinc-800 drop-shadow" dangerouslySetInnerHTML={{ __html: t("description") }} />

            <div
              className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""
                }`}
            >
              <ConsultationDialog
                trigger={
                  <Button className="animate-fadeIn w-full bg-gradient-to-r from-[#1289A6] to-[#1a8ba7] px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto">
                    {t("cta.quote")}
                  </Button>
                }
              />

            </div>

            <div className="mt-10 animate-fadeIn">
              <div className="rounded-full bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-sm md:text-lg font-semibold text-zinc-700">{t("trust")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

