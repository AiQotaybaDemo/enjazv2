import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { arSA } from "date-fns/locale"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getLocale, getTranslations } from "next-intl/server"

export async function BlogPost({ post }: any) {
  const lang = await getLocale()
  const isRTL = lang === "ar"
  const t = await getTranslations("blog")

  return (
    <article className="py-10">
      <div className="container mx-auto md:max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="group -ml-4 text-zinc-600 hover:text-[#14697d]">
            <Link href={`/${lang}/blog`} className="flex items-center gap-2">
              <ArrowLeft className={`h-4 w-4 transition-transform ${isRTL ? "rotate-180" : ""}`} />
              {t("backToBlog")}
            </Link>
          </Button>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
              alt={post.featuredImage.node.altText || post.title}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy", {
                locale: isRTL ? arSA : undefined,
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 md:text-5xl">{post.title}</h1>
        </header>

        {/* Post Content */}
        <div
          className="prose max-w-none text-zinc-600 prose-headings:text-zinc-900 prose-a:text-[#14697d] prose-a:no-underline hover:prose-a:text-[#14697d]/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}

