import type { Metadata } from "next"
import { getLocale } from "next-intl/server"
import { getLatestPosts } from "@/lib/wordpress"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LatestPosts } from "@/app/[lang]/blog/components/latest-posts"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: lang === "ar" ? "خدمات تأسيس الأعمال والاستشارات في الإمارات | إنجاز" : "Business Setup & Consultancy Services in UAE | Enjaz",
    description: lang === "ar"
      ? "خدمات احترافية لتأسيس الشركات والاستشارات في الإمارات. احصل على توجيه متخصص لتأسيس الشركات وخدمات التأشيرات وحلول الأعمال"
      : "Expert business setup, consultancy, and corporate services in UAE. Get professional guidance for company formation, visa services, and business solutions.",
    openGraph: {
      title: lang === "ar" ? "خدمات تأسيس الأعماد والاستشارات في الإمارات | إنجاز" : "Business Setup & Consultancy Services in UAE | Enjaz",
      description:
        lang === "ar"
          ? "خدمات احترافية لتأسيس الشركات والاستشارات في الإمارات. احصل على توجيه متخصص لتأسيس الشركات وخدمات التأشيرات وحلول الأعمال"
          : "Expert business setup, consultancy, and corporate services in UAE. Get professional guidance for company formation, visa services, and business solutions.",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "إنجاز لخدمات الأعمال" : "Enjaz Business Services",
        },
      ],
    },
  }
}

export default async function Page() {
  const lang = await getLocale()
  const latestPosts = await getLatestPosts(lang, 3)

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <LatestPosts posts={latestPosts} />
    </div>
  )
}

