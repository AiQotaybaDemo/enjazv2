import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "@/components/consultation-dialog"
import { useTranslations } from "next-intl"


export function CTA({ name = "visa" }: any) {
  const t = useTranslations(`services.${name}.cta`)
  return (
    <section className="bg-gradient-to-r from-[#14697d] to-[#1a8ba7] py-24 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mb-8 text-lg text-white/90">{t("description")}</p>
          <ConsultationDialog
            trigger={
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white  cursor-pointer bg-transparent px-8 text-white hover:bg-white hover:text-[#14697d]"
              >
                <p>{t("button")} </p>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}

