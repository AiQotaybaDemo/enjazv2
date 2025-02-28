import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "@/components/consultation-dialog"
import { useLocale } from "next-intl"

const defaultDict: any = {
  en: {
    title: "Launch Business with Confidence. Grow with Purpose. Achieve Lasting Success.",
    subtitle: "Mainland Business Setup | Offshore Business Setup | Freezone Business Setup",
    description: "Your Roadmap to Success Starts Here. Get expert advice tailored to your business needs.",
    cta: "Book a Free Consultation"
  },
  ar: {
    title: "أطلق مشروعك بثقة. نمُ بأهداف واضحة. وحقق النجاح الدائم.",
    subtitle: "تأسيس الأعمال في البر الرئيسي | تأسيس الأعمال الخارجية | تأسيس الأعمال في المناطق الحرة",
    description: "دليلك للنجاح يبدأ من هنا. احصل على استشارة متخصصة تناسب احتياجات عملك.",
    cta: "احجز استشارة مجانية"
  }
}

export function BusinessHero() {
  const lang = useLocale()
  const isRTL = lang === "ar"
  const heroContent = defaultDict[lang]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className={`container ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fadeIn mb-6 pb-4 text-3xl font-bold leading-tight bg-gradient-to-r from-[#14697d] to-[#00acd7] text-transparent bg-clip-text drop-shadow-lg sm:text-xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-8">
            {heroContent.title}
          </h1>
          <p className="mb-8 text-md md:text-xl text-zinc-600">
            {heroContent.subtitle}
          </p>
          <p className="mb-12 text-sm md:text-lg text-zinc-600">
            {heroContent.description}
          </p>
          <ConsultationDialog
            trigger={
              <Button
                size="lg"
                className="bg-[#14697d] text-white cursor-pointer px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#14697d]/90 hover:shadow-xl"
              >
                {heroContent.cta}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}

