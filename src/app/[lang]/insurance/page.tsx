import type { Metadata } from "next"
import { InsuranceHero } from "@/app/[lang]/insurance/hero"
import { InsuranceServices } from "@/app/[lang]/insurance/services"
import { CTA } from "@/components/cta"

export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title:
      lang === "ar"
        ? "حلول التأمين للأعمال في الإمارات | تغطية شاملة"
        : "Business Insurance Solutions UAE | Comprehensive Coverage",
    description:
      lang === "ar"
        ? "حلول تأمين شاملة للأعمال في الإمارات. توجيه متخصص للتأمين الصحي وتأمين الممتلكات والتأمين الجماعي"
        : "Comprehensive business insurance solutions in UAE. Expert guidance for health insurance, property insurance, and group insurance coverage.",
    openGraph: {
      title:
        lang === "ar"
          ? "حلول التأمين للأعمال في الإمارات | تغطية شاملة"
          : "Business Insurance Solutions UAE | Comprehensive Coverage",
      description:
        lang === "ar"
          ? "حلول تأمين شاملة للأعمال في الإمارات. توجيه متخصص للتأمين الصحي وتأمين الممتلكات والتأمين الجماعي"
          : "Comprehensive business insurance solutions in UAE. Expert guidance for health insurance, property insurance, and group insurance coverage.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "حلول التأمين للأعمال" : "Business Insurance Solutions",
        },
      ],
    },
  }
}

export default async function InsurancePage() {

  return (
    <main className="pt-20">
      <InsuranceHero />
      <InsuranceServices />
      <CTA name="insurance"/>
    </main>
  )
}

