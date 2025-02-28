import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "@/components/consultation-dialog"

const defaultDict = {
  services: {
    visa: {
      cta: {
        title: "Need Help with Your Visa?",
        description: "Let us guide you through the process. Our expert team is ready to assist you.",
        button: "Schedule a Consultation",
      },
    },
  },
}

export function CTA({ dict, lang }: any) {
  const isRTL = lang === "ar"
  const content = dict?.services?.visa?.cta ?? defaultDict.services.visa.cta

  return (
    <section className="bg-gradient-to-r from-[#14697d] to-[#1a8ba7] py-24 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{content.title}</h2>
          <p className="mb-8 text-lg text-white/90">{content.description}</p>
          <ConsultationDialog
            dict={dict}
            lang={lang}
            trigger={
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white  cursor-pointer bg-transparent px-8 text-white hover:bg-white hover:text-[#14697d]"
              >
                <p> {isRTL ? "جدولة استشارة مجانية" : "Schedule Your Free Consultation"} </p>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}

