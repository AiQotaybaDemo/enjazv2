import { Building2, Briefcase, Users, LineChart, Laptop } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
// locale
import { useLocale } from "next-intl"

const defaultDict = {
  en: {
    title: "Our Services",
    subtitle: "What We Offer",
    description:
      "Starting a new business should be exciting, not overwhelming. Whether you're opening a new company or expanding your operations, we help simplify the entire setup process. Our expert team handles everything from legal registration to essential business tools, ensuring you have everything in place to hit the ground running.",
    items: {
      registration: {
        title: "Business Registration & Licensing",
        description:
          "We manage the entire registration process—from obtaining your trade license to setting up your commercial location, making it simple and stress-free.",
      },
      office: {
        title: "Office Setup",
        description:
          "Whether it's finding the perfect office space or supplying the right equipment, we ensure your workspace is optimized for success.",
      },
      visa: {
        title: "Visa Services",
        description: "Need employee visas? We handle the paperwork and logistics for a smooth and quick process.",
      },
      consultancy: {
        title: "Consultancy & Expert Guidance",
        description:
          "Buying or selling a business? Our experienced consultants guide you through every step to ensure you make the right move.",
      },
      technology: {
        title: "Technology & Tools",
        description:
          "From laptops to project management software, we equip your business with the essential tools to operate efficiently from day one.",
      },
    },
  },
  ar: {
    title: "خدماتنا",
    subtitle: "ماذا نقدم",
    description:
      "تأسيس شركة جديدة يجب أن يكون مثيراً، وليس مرهقاً. سواء كنت تفتح شركة جديدة أو توسع عملياتك، نحن نساعدك في تطوير خطط أعمال واستراتيجيات نمو قوية.",
    items: {
      registration: {
        title: "تسجيل الشركات والتراخيص التجارية",
        description:
          "نقدم خدمات عالية الجودة لتأسيس الأعمال والترخيص التجارية المهنية لشراء وبيع الأعمال والأصول التجارية وتأمين القروض. مع سنوات من الخبرة وفريق متخصص، نضمن عملية سلسة وشفافة لعملائنا.",
      },
      office: {
        title: "إعداد المكاتب",
        description:
          "سواء كان الأمر يتعلق بإيجاد المساحة المكتبية المثالية أو توفير المعدات المناسبة، نحن نضمن تحسين مساحة عملك للنجاح.",
      },
      visa: {
        title: "خدمات التأشيرات",
        description: "هل تحتاج إلى تأشيرات للموظفين؟ نتولى الأوراق والخدمات اللوجستية لعملية سلسة وسريعة.",
      },
      consultancy: {
        title: "الاستشارات والتوجيه المتخصص",
        description: "شراء أو بيع شركة؟ مستشارونا ذوو الخبرة يوجهونك خلال كل خطوة لضمان اتخاذك القرار الصحيح.",
      },
      technology: {
        title: "التكنولوجيا والأدوات",
        description:
          "من أجهزة الكمبيوتر المحمولة إلى برامج إدارة المشاريع، نجهز عملك بالأدوات الأساسية للعمل بكفاءة من اليوم الأول.",
      },
    },
  },
}

export function ServicesSection() {
  const lang = useLocale()
  const isRTL = lang === "ar"
  // Use the passed dict if available, otherwise fall back to defaultDict
  const services = defaultDict[lang as keyof typeof defaultDict]

  // Add type checking for items
  const items = services?.items

  const servicesList = [
    { icon: Building2, ...items.registration },
    { icon: Briefcase, ...items.office },
    { icon: Users, ...items.visa },
    { icon: LineChart, ...items.consultancy },
    { icon: Laptop, ...items.technology },
  ]

  return (
    <section id="services" className="bg-[url('/assets/img/shape/37.png')] bg-right-bottom px-4 bg-no-repeat py-24">
      <div className={`container md:max-w-7xl mx-auto ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="rounded-lg bg-white p-2 shadow-md">
              <Image
                src="https://enjazcb.vercel.app/assets/img/icon/home-5.png"
                alt="Services icon"
                width={24}
                height={24}
              />
            </div>
            <h4 className="m-0 text-lg font-semibold">{services.title}</h4>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{services.subtitle}</h2>
          <p className="text-lg text-zinc-600">{services.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <Link
              key={index}
              href={`/${lang}${index === 0 ? "/services/company-registration"
                : index === 1 ? "/business"
                  : index === 2 ? "/services/visa"
                    : index === 3 ? "/services/consultancy"
                      : "/business"
                }`}
              className="block transition-transform hover:-translate-y-1"
            >
              <Card className="group relative flex h-full flex-col bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 shadow-inner">
                  <service.icon className="h-8 w-8 text-[#14697d]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

