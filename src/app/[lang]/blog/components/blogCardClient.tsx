"use client"
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function BlogCardClient({ post }: any) {
    const lang = useLocale()
    const isRTL = lang === "ar"
    const t = useTranslations("blog")

    return (
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
                <h3 className="mb-4 text-xl font-bold text-zinc-900 transition-colors group-hover:text-[#1289A6]">
                    {post.title}
                </h3>
                <div className="mb-4 text-zinc-600" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                <span className="text-sm font-medium text-[#1289A6] transition-colors group-hover:text-[#1289A6]/80">
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
    )
}