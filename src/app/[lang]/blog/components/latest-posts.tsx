

import type { Post } from "@/lib/wordpress"
import { BlogCard } from "./blogCard"
import { getTranslations } from "next-intl/server"


export async function LatestPosts({ posts }: any) {
  const t = await getTranslations("blog")

  return (
    <section className="bg-gray-50 px-4 py-24">
      <div className="container md:max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl line-clamp-2">{t("title")}</h2>
          <p className="text-lg text-zinc-600 line-clamp-2">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  )
}

