import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"


export function AboutSection() {
  const t = useTranslations("about")

  return (
    <section id="about" className="bg-[#1289A6] ">
      <div className=" md:max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-2">
        {/* Image Column */}
        <div className=" py-24 rounded-2xl relative aspect-[4/3]  w-full overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <Image
            src="/4.jpg"
            alt="About Us"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Column */}
        <div className=" my-24 rounded-2xl py-8   bg-white px-6 space-y-8">
          <div>
            <div className="mb-4 inline-block rounded-lg bg-[#1289A6]/10 px-4 py-2">
              <h4 className="text-lg font-semibold text-[#1289A6]">
                {t("title")}
              </h4>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
              {t("subtitle")}
            </h2>
            <p className="text-lg text-zinc-600">{t("description")}</p>
          </div>

          {/* Features List */}
          <ul className="space-y-4">
            {[t("features.0"), t("features.1"), t("features.2"), t("features.3")].map((feature: any, index: any) => (
              <li key={index} className="flex items-center gap-3">
                <div className="rounded-full bg-[#1289A6]/10 p-2">
                  <CheckCircle className="h-5 w-5 text-[#1289A6]" />
                </div>
                <span className="text-lg text-zinc-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

