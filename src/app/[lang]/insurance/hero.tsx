import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "@/components/consultation-dialog"
import { getTranslations } from "next-intl/server"

export async function InsuranceHero() {
  const t = await getTranslations("services.insurance.hero")

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fadeIn mb-6 pb-4 text-3xl font-bold leading-tight bg-gradient-to-r from-[#1289A6] to-[#00acd7] text-transparent bg-clip-text drop-shadow-lg sm:text-xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-8 ">
            {t("title")}
          </h1>
          <p className="mb-8 text-md md:text-xl text-zinc-600">{t("subtitle")}</p>
          <p className="mb-12 text-sm md:text-lg text-zinc-600">{t("description")}</p>
          <ConsultationDialog
            trigger={
              <Button
                asChild
                size="lg"
                className=" text-white cursor-pointer bg-gradient-to-r from-[#1289A6] to-[#1a8ba7] px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <p>{t("cta")}</p>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}

