"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { arSA } from "date-fns/locale"
import { Calendar } from "lucide-react"
import type { Post } from "@/lib/wordpress"
import NProgress from "nprogress"
import { useLocale, useTranslations } from "next-intl"


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
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/${lang}/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {post.featuredImage && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy", {
                      locale: isRTL ? arSA : undefined,
                    })}
                  </time>
                </div>
                <h2 className="mb-4 text-xl font-bold text-zinc-900 transition-colors group-hover:text-[#14697d]">
                  {post.title}
                </h2>
                <div className="mb-4 text-zinc-600" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                <span className="text-sm font-medium text-[#14697d] transition-colors group-hover:text-[#14697d]/80">
                  {t("readMore")}
                  <svg
                    className={`ml-1 inline-block h-4 w-4 transition-transform ${isRTL ? "rotate-180" : ""} group-hover:${isRTL ? "-translate-x-1" : "translate-x-1"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
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

