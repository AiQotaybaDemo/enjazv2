import type { Metadata } from "next"
import { VisaHero } from "@/app/[lang]/services/visa/hero"
import { VisaServices } from "@/app/[lang]/services/visa/services"
import { VisaProcess } from "@/app/[lang]/services/visa/process"
import { CTA } from "@/components/cta"

export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title:
      lang === "ar"
        ? "خدمات التأشيرات في الإمارات | تأشيرات الأعمال والتوظيف"
        : "UAE Visa Services | Business & Employment Visas",
    description:
      lang === "ar"
        ? "خدمات تأشيرات احترافية في الإمارات. مساعدة متخصصة في تأشيرات الأعمال وتأشيرات العمل وتأشيرات العائلة. معالجة سريعة وموثوقة للتأشيرات"
        : "Professional visa services in UAE. Expert assistance with business visas, employment visas, and family visas. Fast and reliable visa processing.",
    openGraph: {
      title:
        lang === "ar"
          ? "خدمات التأشيرات في الإمارات | تأشيرات الأعمال والتوظيف"
          : "UAE Visa Services | Business & Employment Visas",
      description:
        lang === "ar"
          ? "خدمات تأشيرات احترافية في الإمارات. مساعدة متخصصة في تأشيرات الأعمال وتأشيرات العمل وتأشيرات العائلة. معالجة سريعة وموثوقة للتأشيرات"
          : "Professional visa services in UAE. Expert assistance with business visas, employment visas, and family visas. Fast and reliable visa processing.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "خدمات التأشيرات في الإمارات" : "UAE Visa Services",
        },
      ],
    },
  }
}

export default async function VisaPage() {
  return (
    <main className="pt-20">
      <VisaHero />
      <VisaServices />
      <VisaProcess />
      <CTA />
    </main>
  )
}

