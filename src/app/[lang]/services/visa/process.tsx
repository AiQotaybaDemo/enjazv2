import { ClipboardCheck, FileText, HeartHandshake } from "lucide-react"

const defaultDict = {
  services: {
    visa: {
      process: {
        title: "Our Process",
        description: "Simple, transparent, and efficient visa processing",
        steps: {
          consultation: {
            title: "Consultation",
            description: "We assess your needs and provide a personalized plan.",
          },
          application: {
            title: "Visa Application",
            description: "Fast, efficient processing to minimize downtime.",
          },
          support: {
            title: "Post-Visa Support",
            description: "Ongoing support for renewals and changes.",
          },
        },
      },
    },
  },
}

export function VisaProcess({ dict }: any) {
  const content = dict?.services?.visa?.process ?? defaultDict.services.visa.process

  const steps = [
    {
      icon: ClipboardCheck,
      title: content.steps?.consultation?.title,
      description: content.steps?.consultation?.description,
    },
    {
      icon: FileText,
      title: content.steps?.application?.title,
      description: content.steps?.application?.description,
    },
    {
      icon: HeartHandshake,
      title: content.steps?.support?.title,
      description: content.steps?.support?.description,
    },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{content.title}</h2>
          <p className="text-lg text-zinc-600">{content.description}</p>
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
                <div className="absolute left-1/2 top-8 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-[#14697d] to-[#1a8ba7] md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

