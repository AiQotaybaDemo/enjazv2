import { Building2, Briefcase, Users, LineChart, Laptop, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLocale } from "next-intl"

const defaultDict: any = {
    en: {
        title: "What We Offer",
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
            government: {
                title: "Government Documents",
                description: "We handle all government-related documentation, including attestation, translation, and legalization of documents for seamless business operations.",
            },
        },
    },
    ar: {
        title: "ماذا نقدم",
        description:
            "يجب أن يكون بدء عمل جديد تجربة مثيرة وليس مرهقة. سواء كنت تؤسس شركة جديدة أو توسع عملياتك، نحن نبسط لك عملية الإعداد بالكامل. يتولى فريقنا المتخصص كل شيء بدءًا من التسجيل القانوني وحتى الأدوات الأساسية، لضمان انطلاقة قوية لمشروعك.",
        items: {
            registration: {
                title: "تسجيل الشركات والتراخيص التجارية",
                description:
                    "نحن ندير عملية التسجيل بالكامل، بدءًا من الحصول على رخصة التجارة وحتى تجهيز موقعك التجاري، مما يجعل العملية بسيطة وخالية من التعقيدات.",
            },
            office: {
                title: "إعداد المكاتب",
                description:
                    "سواء كان العثور على المساحة المثالية أو توفير المعدات المناسبة، نضمن لك بيئة عمل مجهزة لتحقيق النجاح.",
            },
            visa: {
                title: "خدمات التأشيرات",
                description: "هل تحتاج إلى تأشيرات للموظفين؟ نحن نتولى جميع الأوراق والخدمات اللوجستية لضمان عملية سلسة وسريعة.",
            },
            consultancy: {
                title: "الاستشارات والتوجيه المتخصص",
                description:
                    "سواء كنت تشتري أو تبيع عملاً تجاريًا، مستشارونا الخبراء يوجهونك في كل خطوة لضمان اتخاذ القرار الصحيح.",
            },
            technology: {
                title: "التكنولوجيا والأدوات",
                description:
                    "من أجهزة الكمبيوتر المحمولة إلى برامج إدارة المشاريع، نزود عملك بالأدوات الأساسية لضمان التشغيل الفعّال منذ اليوم الأول.",
            },
            government: {
                title: "المستندات الحكومية",
                description: "نتولى جميع المستندات المتعلقة بالحكومة، بما في ذلك التصديق والترجمة والتوثيق القانوني للمستندات لضمان سير العمل بسلاسة.",
            },
        },
    },
}

export function BusinessServices() {
    const lang = useLocale()
    const isRTL = lang === "ar"
    const servicesData = defaultDict[lang]

    const servicesList = [
        { icon: LineChart, ...servicesData.items.consultancy },
        { icon: Building2, ...servicesData.items.registration },
        { icon: FileText, ...servicesData.items.government },
        { icon: Briefcase, ...servicesData.items.office },
        { icon: Users, ...servicesData.items.visa },
        { icon: Laptop, ...servicesData.items.technology },
    ]

    return (
        <section className="py-24">
            <div className={`container  md:max-w-7xl mx-auto ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{servicesData.title}</h2>
                    <p className="text-lg text-zinc-600">{servicesData.description}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicesList.map((service, index) => (
                        <Card key={index} className="flex flex-col p-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1289A6]/10">
                                <service.icon className="h-6 w-6 text-[#1289A6]" />
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

