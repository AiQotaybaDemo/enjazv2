import type { Metadata } from "next"
import { ConsultancyHero } from "@/app/[lang]/services/consultancy/hero"
import { ConsultancyServices } from "@/app/[lang]/services/consultancy/services"
import { CTA } from "@/components/cta"

export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title:
      lang === "ar"
        ? "خدمات الاستشارات التجارية | حلول استراتيجية في الإمارات"
        : "Business Consultancy Services | Strategic Solutions UAE",
    description:
      lang === "ar"
        ? "خدمات استشارية متخصصة للأعمال في الإمارات. توجيه استراتيجي لنمو الأعمال ودخول السوق وتحسين العمليات. احصل على المشورة المهنية اليوم"
        : "Expert business consultancy services in UAE. Strategic guidance for business growth, market entry, and operational optimization. Get professional advice today.",
    openGraph: {
      title:
        lang === "ar"
          ? "خدمات الاستشارات التجارية | حلول استراتيجية في الإمارات"
          : "Business Consultancy Services | Strategic Solutions UAE",
      description:
        lang === "ar"
          ? "خدمات استشارية متخصصة للأعمال في الإمارات. توجيه استراتيجي لنمو الأعمال ودخول السوق وتحسين العمليات. احصل على المشورة المهنية اليوم"
          : "Expert business consultancy services in UAE. Strategic guidance for business growth, market entry, and operational optimization. Get professional advice today.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "خدمات الاستشارات التجارية" : "Business Consultancy Services",
        },
      ],
    },
  }
}

export default async function ConsultancyPage() {
  return (
    <main className="pt-20">
      <ConsultancyHero />
      <ConsultancyServices />
      <CTA name="consultancy" />
    </main>
  )
}

