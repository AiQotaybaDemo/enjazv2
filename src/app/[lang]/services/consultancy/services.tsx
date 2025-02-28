import { LineChart, Scale, TrendingUp, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"

const defaultDict = {
  services: {
    consultancy: {
      services: {
        title: "Our Consultancy Services",
        description: "Comprehensive solutions to help your business thrive",
        items: {
          strategy: {
            title: "Business Strategy & Planning",
            description:
              "Strategic insights to guide your vision and growth. We help you develop robust business plans and growth strategies.",
          },
          regulatory: {
            title: "Regulatory & Compliance Guidance",
            description:
              "Navigate the legal landscape with ease. Expert advice on compliance requirements and regulatory frameworks.",
          },
          market: {
            title: "Market Entry & Expansion",
            description:
              "Expert advice on entering new markets and scaling operations. Market analysis and expansion strategies.",
          },
          operations: {
            title: "Operational Efficiency & Optimization",
            description:
              "Streamlining processes for better performance. Improve productivity and reduce operational costs.",
          },
        },
      },
    },
  },
}

export function ConsultancyServices({ dict }: any) {
  const content = dict?.services?.consultancy?.services ?? defaultDict.services.consultancy.services

  const services = [
    {
      icon: LineChart,
      title: content.items?.strategy?.title,
      description: content.items?.strategy?.description,
    },
    {
      icon: Scale,
      title: content.items?.regulatory?.title,
      description: content.items?.regulatory?.description,
    },
    {
      icon: TrendingUp,
      title: content.items?.market?.title,
      description: content.items?.market?.description,
    },
    {
      icon: Settings,
      title: content.items?.operations?.title,
      description: content.items?.operations?.description,
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{content.title}</h2>
          <p className="text-lg text-zinc-600">{content.description}</p>
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

