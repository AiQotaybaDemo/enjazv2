import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export function ContactSection() {
  const lang = useLocale()
  const t = useTranslations("contact")
  const isRTL = lang === "ar"

  // Safely access dictionary values with fallbacks
  const contact = {
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
    phone: { label: t("phone.label"), value: t("phone.value") },
    address: { label: t("address.label"), value: t("address.value") },
  }

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat px-4 py-24 "
    >
      <div className={` justify-center mx-auto grid items-center gap-4 lg:grid-cols-2   ${isRTL ? "lg:grid-flow-dense" : ""}`}>
        {/* Left Column - Contact Information */}
        <div className="flex justify-end w-full">
          <div className={` md:max-w-[40rem] space-y-8 rounded-2xl  bg-white/95 p-6 md:p-8 shadow-xl backdrop-blur-sm ${isRTL ? "text-right" : ""}`} >
            {/* Section Header */}
            <div>
              <div className={`mb-6 inline-flex items-center gap-2 rounded-full bg-[#1289A6]/10 px-4 py-2 ${isRTL ? "flex-row-reverse" : ""}`} >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1289A6]">
                  <Image
                    src="/images/icon/home-5.png"
                    alt=""
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </div>
                <h4 className="text-lg font-semibold uppercase text-[#1289A6]">{contact.title}</h4>
              </div>
              <h2 className="mb-4 text-4xl font-bold text-zinc-900 lg:text-5xl">{contact.subtitle}</h2>
              <p className="text-lg text-zinc-600">{contact.description}</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone Number */}
              <div className={`flex items-start gap-4 ${isRTL ? "flex-row" : ""}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1289A6]/10 shadow-inner">
                  <Phone className="h-6 w-6 text-[#1289A6]" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-zinc-900">{contact.phone.label}</h4>
                  <a
                    href={`tel:${contact.phone.value.replace(/\s/g, "")}`}
                    className="text-lg text-[#1289A6] transition-colors hover:text-[#1289A6]/80 hover:underline"
                    style={{ unicodeBidi: "plaintext" }}
                  >
                    {contact.phone.value}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={`flex items-start gap-4 ${isRTL ? "flex-row" : ""}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1289A6]/10 shadow-inner">
                  <MapPin className="h-6 w-6 text-[#1289A6]" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-zinc-900">{contact.address.label}</h4>
                  <p className="text-lg text-zinc-600 max-w-[80%]" style={{ unicodeBidi: "plaintext" }}>
                    {contact.address.value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="  md:max-w-[40rem] bg-[#1289A6]">
          <div className="relative flex justify-end aspect-video w-full overflow-hidden rounded-2xl   transition-transform hover:scale-[1.02] lg:aspect-square">
            <Image
              src="/images/about.png"
              alt="Customer service representative"
              fill
              loading="lazy"
              className="object-cover my-6 md:my-14 max-w-[80%] rounded-2xl max-h-[80%] mx-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

