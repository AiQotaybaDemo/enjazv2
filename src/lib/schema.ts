export function generateOrganizationSchema(lang: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "ar" ? "إنجاز لخدمات الأعمال" : "Headlinks Business Services",
    url: "https://headlinkes.com",
    logo: "https://headlinkes.com/logo.svg",
    description:
      lang === "ar"
        ? "خدمات احترافية لتأسيس الأعمال والاستشارات والخدمات المؤسسية في الإمارات"
        : "Professional business setup, consultancy, and corporate services in UAE",
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 Mustafa Al Sayeh Street",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-04-264-8726",
      contactType: "customer service",
    },
    sameAs: [
      // "https://www.facebook.com/Headlinks",
      // "https://twitter.com/Headlinks",
      // "https://www.linkedin.com/company/Headlinks",
    ],
  }
}

export function generateServiceSchema(
  service: {
    name: { ar: string; en: string }
    description: { ar: string; en: string }
    url: string
  },
  lang: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: lang === "ar" ? "إنجاز لخدمات الأعمال" : "Enjaz Business Services",
    },
    name: lang === "ar" ? service.name.ar : service.name.en,
    description: lang === "ar" ? service.description.ar : service.description.en,
    url: service.url,
    areaServed: {
      "@type": "Country",
      name: lang === "ar" ? "الإمارات العربية المتحدة" : "United Arab Emirates",
    },
  }
}

export function generateBreadcrumbSchema(
  items: Array<{
    name: { ar: string; en: string }
    url: string
  }>,
  lang: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: lang === "ar" ? item.name.ar : item.name.en,
      item: item.url,
    })),
  }
}

