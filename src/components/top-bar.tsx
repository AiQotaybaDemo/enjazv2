import Link from "next/link"
import { Clock, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server";

export async function TopBar() {
  const lang = await getLocale()
  const isRTL = lang === "ar"
  const t = await getTranslations("")

  return (
    <div className="w-full bg-zinc-900 text-white md:flex hidden">
      <div className="container mx-auto  md:max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 px-4 py-2 md:flex-row">
          {/* Left side - Location and Hours */}
          <div className={`flex flex-col gap-2 text-sm md:flex-row md:gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
                {t("sideMenu.address.value")}
                </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {t("footer.hours.title")}: {t("footer.hours.closed")}
              </span>
            </div>
          </div>

          {/* Right side - Language and Social */}
          <div className={`flex items-center gap-6 ${isRTL ? "flex-row" : ""}`}>

            {/* Social Media Links */}
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="#" className="text-white/80 transition-colors hover:text-white">
                <Facebook className="h-4 w-4 fill-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 transition-colors hover:text-white">
                <Twitter className="h-4 w-4 fill-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 transition-colors hover:text-white">
                <svg
                  className="h-4 w-4 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="m10 15 5-3-5-3z" fill="#000" />
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-white/80 transition-colors hover:text-white">
                <Linkedin className="h-4 w-4 fill-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

