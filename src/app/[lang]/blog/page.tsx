import type { Metadata } from "next"
import { getAllPosts } from "@/lib/wordpress"
import { BlogList } from "./components/blog-list"

export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: lang === "ar" ? "رؤى وتحديثات الأعمال | مدونة إنجاز" : "Business Insights & Updates | Enjaz Blog",
    description:
      lang === "ar"
        ? "ابق على اطلاع بأحدث رؤى الأعمال وأخبار الصناعة والنصائح المتخصصة من إنجاز. اكتشف معلومات قيمة حول تأسيس وتشغيل الأعمال في الإمارات"
        : "Stay updated with the latest business insights, industry news, and expert advice from Enjaz. Discover valuable information about business setup and operations in UAE.",
    openGraph: {
      title: lang === "ar" ? "رؤى وتحديثات الأعمال | مدونة إنجاز" : "Business Insights & Updates | Enjaz Blog",
      description:
        lang === "ar"
          ? "ابق على اطلاع بأحدث رؤى الأعمال وأخبار الصناعة والنصائح المتخصصة من إنجاز. اكتشف معلومات قيمة حول تأسيس وتشغيل الأعمال في الإمارات"
          : "Stay updated with the latest business insights, industry news, and expert advice from Enjaz. Discover valuable information about business setup and operations in UAE.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "مدونة إنجاز للأعمال" : "Enjaz Business Blog",
        },
      ],
    },
  }
}

interface BlogPageProps {
  params: { lang: any }
  searchParams: { page?: string }
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { lang } = await params
  const page = Number(searchParams.page) || 1
  const postsPerPage = 9

  const { nodes: posts, pageInfo } = await getAllPosts(
    lang,
    postsPerPage,
    page > 1 ? btoa(`arrayconnection:${(page - 1) * postsPerPage - 1}`) : undefined,
  )

  return (
    <main className="pt-10 md:pt-20 p-4">
      <BlogList posts={posts} currentPage={page} hasNextPage={pageInfo.hasNextPage} lang={lang} />
    </main>
  )
}

