import { ClipboardCheck, FileText, HeartHandshake } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function VisaProcess() {
  const t = await getTranslations("services.visa.process")
  const steps = [
    {
      icon: ClipboardCheck,
      title: t("steps.consultation.title"),
      description: t("steps.consultation.description"),
    },
    {
      icon: FileText,
      title: t("steps.application.title"),
      description: t("steps.application.description"),
    },
    {
      icon: HeartHandshake,
      title: t("steps.support.title"),
      description: t("steps.support.description"),
    },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-zinc-600">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#14697d] to-[#1a8ba7]">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">{step.title}</h3>
              <p className="text-zinc-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute rtl:hidden left-1/2 top-8 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-[#14697d] to-[#1a8ba7] md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

