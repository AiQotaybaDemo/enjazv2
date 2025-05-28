export function generateOrganizationSchema(lang: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "ar" ? "Headlinks لخدمات الأعمال" : "Headlinks Business Services", // Updated
    url: "https://headlinkes.com", // Updated based on user's previous selection
    logo: "https://headlinkes.com/logo.svg", // Updated based on user's previous selection
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
      // "https://www.facebook.com/Headlinks", // Updated based on user's previous selection
      // "https://twitter.com/Headlinks", // Updated based on user's previous selection
      // "https://www.linkedin.com/company/Headlinks", // Updated based on user's previous selection
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
      name: lang === "ar" ? "Headlinks لخدمات الأعمال" : "Headlinks Business Services", // Updated
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

