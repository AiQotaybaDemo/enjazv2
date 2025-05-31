import { ShieldCheck, Heart, Car, Building, Users2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"

export async function InsuranceServices() {
  const t = await getTranslations("services.insurance.services")

  const services = [
    {
      icon: Heart,
      title: t("items.health.title"),
      description: t("items.health.description"),
    },
    {
      icon: ShieldCheck,
      title: t("items.life.title"),
      description: t("items.life.description"),
    },
    {
      icon: Car,
      title: t("items.auto.title"),
      description: t("items.auto.description"),
    },
    {
      icon: Building,
      title: t("items.property.title"),
      description: t("items.property.description"),
    },
    {
      icon: Users2,
      title: t("items.group.title"),
      description: t("items.group.description"),
    },
  ]

  return (
    <section className="py-24">
      <div className="container  md:max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-zinc-600">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#1289A6] to-[#1a8ba7]">
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

