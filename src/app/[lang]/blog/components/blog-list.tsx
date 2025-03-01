"use client"
import { useRouter } from "next/navigation"
import type { Post } from "@/lib/wordpress"
import NProgress from "nprogress"
import { useLocale, useTranslations } from "next-intl" 
import { BlogCardClient } from "./blogCardClient"


export function BlogList({ posts, currentPage, hasNextPage }: any) {
  const router = useRouter()
  const lang = useLocale()
  const isRTL = useLocale() === "ar"
  const t = useTranslations("blog")

  const handlePageChange = (page: number) => {
    NProgress.start()
    router.push(`/${lang}/blog?page=${page}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-10">
      <div className="container md:max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">{t("title")}</h1>
          <p className="text-lg text-zinc-600">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => <BlogCardClient post={post} key={post.id} />)}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-4">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="rounded-lg border-2 border-[#14697d] bg-transparent px-6 py-2 font-semibold text-[#14697d] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#14697d] hover:text-white hover:shadow-xl"
            >
              {isRTL ? "السابق" : "Previous"}
            </button>
          )}
          <span className="flex h-10 items-center justify-center px-4 font-medium text-zinc-600">
            {isRTL ? `صفحة ${currentPage}` : `Page ${currentPage}`}
          </span>
          {hasNextPage && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="rounded-lg border-2 border-[#14697d] bg-transparent px-6 py-2 font-semibold text-[#14697d] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#14697d] hover:text-white hover:shadow-xl"
            >
              {isRTL ? "التالي" : "Next"}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

