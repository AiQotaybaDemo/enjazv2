import type { Metadata } from "next"
import { BusinessHero } from "@/app/[lang]/business/hero"
import { BusinessServices } from "@/app/[lang]/business/services"
import { CTA } from "@/components/cta"

export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title:
      lang === "ar"
        ? "خدمات تأسيس الشركات في الإمارات | تأسيس الشركات"
        : "Business Setup Services in UAE | Company Formation",
    description:
      lang === "ar"
        ? "خدمات احترافية لتأسيس الشركات في الإمارات. توجيه متخصص لتأسيس الشركات في البر الرئيسي والمناطق الحرة والأوفشور. ابدأ شركتك اليوم"
        : "Professional business setup services in UAE. Expert guidance for mainland, free zone & offshore company formation. Get started with your business today.",
    openGraph: {
      title:
        lang === "ar"
          ? "خدمات تأسيس الشركات في الإمارات | تأسيس الشركات"
          : "Business Setup Services in UAE | Company Formation",
      description:
        lang === "ar"
          ? "خدمات احترافية لتأسيس الشركات في الإمارات. توجيه متخصص لتأسيس الشركات في البر الرئيسي والمناطق الحرة والأوفشور. ابدأ شركتك اليوم"
          : "Professional business setup services in UAE. Expert guidance for mainland, free zone & offshore company formation. Get started with your business today.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "خدمات تأسيس الشركات في الإمارات" : "Business Setup Services UAE",
        },
      ],
    },
  }
}

export default async function BusinessPage() {

  return (
    <main className="pt-20">
      <BusinessHero />
      <BusinessServices />
      <CTA />
    </main>
  )
}

