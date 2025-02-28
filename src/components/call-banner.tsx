import { getTranslations } from "next-intl/server"
import { Headset } from "lucide-react"
import Link from "next/link"


export async function  CallBanner({ lang = "en" }: any) {
  const isRTL = lang === "ar"
  const t: any = await getTranslations("callBanner")


  return (
    <section className="bg-gradient-to-r from-[#14697d] to-[#1a8ba7] py-6 text-white shadow-lg">
      <div className="container mx-auto lg:max-w-7xl">
        <div
          className={`flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8 ${isRTL ? "md:flex-row" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 shadow-inner backdrop-blur-sm">
              <Headset className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-medium">{t("title")}</h3>
          </div>
          <Link
            href={`tel:${t("phone").replace(/\s/g, "")}`}
            style={{ unicodeBidi: "plaintext" }}
            className="text-2xl font-medium transition-all hover:-translate-y-0.5 hover:text-white/90"
          >
            <span className="relative">
              {t("phone")}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

