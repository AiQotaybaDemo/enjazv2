import { Briefcase, Users, UserCog, Users2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"

export async function VisaServices() {
  const t = await getTranslations("services.visa.services")
  const services = [
    {
      icon: Briefcase,
      title: t("items.business.title"),
      description: t("items.business.description"),
    },
    {
      icon: Users,
      title: t("items.employee.title"),
      description: t("items.employee.description"),
    },
    {
      icon: UserCog,
      title: t("items.freelancer.title"),
      description: t("items.freelancer.description"),
    },
    {
      icon: Users2,
      title: t("items.family.title"),
      description: t("items.family.description"),
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto md:max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-zinc-600">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
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

