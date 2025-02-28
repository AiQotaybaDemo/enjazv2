import { LineChart, Scale, TrendingUp, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"


export async function ConsultancyServices() {
  const t = await getTranslations("services.consultancy.services")
  // const content = dict?.services?.consultancy?.services ?? defaultDict.services.consultancy.services

  const services = [
    {
      icon: LineChart,
      title: t("items.strategy.title"),
      description: ("items.strategy.description"),
    },
    {
      icon: Scale,
      title: t("items.regulatory.title"),
      description: t("items.regulatory.description"),
    },
    {
      icon: TrendingUp,
      title: t("items.market.title"),
      description: t("items.market.description"),
    },
    {
      icon: Settings,
      title: t("items.operations.title"),
      description: t("items.operations.description"),
    },
  ]

  return (
    <section className="py-24">
      <div className="container md:max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-zinc-600">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#14697d] to-[#1a8ba7]">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">{service.title}</h3>
              <p className="text-zinc-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

