import { Briefcase, Users, UserCog, Users2 } from "lucide-react"
import { Card } from "@/components/ui/card"


const defaultDict = {
  services: {
    visa: {
      services: {
        title: "Our Visa Services",
        description: "Comprehensive visa solutions for all your business needs",
        items: {
          business: {
            title: "Business Visas",
            description: "Complete support for company owners and investors. Expert guidance through the entire visa process.",
          },
          employee: {
            title: "Employee Visas",
            description: "Seamless processing for all your team members. Fast and efficient visa solutions for your workforce.",
          },
          freelancer: {
            title: "Freelancer Visas",
            description: "Tailored solutions for independent contractors and consultants. Perfect for digital nomads and freelancers.",
          },
          family: {
            title: "Family Visas",
            description: "Bring your loved ones with you as you grow your business. Comprehensive family visa support.",
          },
        },
      },
    },
  },
}

export function VisaServices({ dict }: any) {
  const content = dict?.services?.visa?.services ?? defaultDict.services.visa.services

  const services = [
    {
      icon: Briefcase,
      title: content.items?.business?.title,
      description: content.items?.business?.description,
    },
    {
      icon: Users,
      title: content.items?.employee?.title,
      description: content.items?.employee?.description,
    },
    {
      icon: UserCog,
      title: content.items?.freelancer?.title,
      description: content.items?.freelancer?.description,
    },
    {
      icon: Users2,
      title: content.items?.family?.title,
      description: content.items?.family?.description,
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

