import { ShieldCheck, Heart, Car, Building, Users2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const defaultDict = {
  services: {
    insurance: {
      services: {
        title: "Our Insurance Services",
        description: "Comprehensive coverage options tailored to your needs",
        items: {
          health: {
            title: "Health Insurance",
            description:
              "Comprehensive health coverage for individuals and families with access to top healthcare providers.",
          },
          life: {
            title: "Life Insurance",
            description: "Protect your loved ones' financial future with our flexible life insurance policies.",
          },
          auto: {
            title: "Auto Insurance",
            description: "Comprehensive coverage for your vehicles with competitive rates and excellent service.",
          },
          property: {
            title: "Property Insurance",
            description: "Protect your business premises and assets with our comprehensive property insurance.",
          },
          group: {
            title: "Group Insurance",
            description: "Tailored group insurance solutions for businesses of all sizes to protect your employees.",
          },
        },
      },
    },
  },
}

export function InsuranceServices({ dict }: any) {
  const content = dict?.services?.insurance?.services ?? defaultDict.services.insurance.services

  const services = [
    {
      icon: Heart,
      title: content.items?.health?.title,
      description: content.items?.health?.description,
    },
    {
      icon: ShieldCheck,
      title: content.items?.life?.title,
      description: content.items?.life?.description,
    },
    {
      icon: Car,
      title: content.items?.auto?.title,
      description: content.items?.auto?.description,
    },
    {
      icon: Building,
      title: content.items?.property?.title,
      description: content.items?.property?.description,
    },
    {
      icon: Users2,
      title: content.items?.group?.title,
      description: content.items?.group?.description,
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{content.title}</h2>
          <p className="text-lg text-zinc-600">{content.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

