
import { BlogPost } from "@/app/[lang]/blog/components/blog-post"
import { getPost } from "@/lib/wordpress"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { lang: any, slug: any } }): Promise<Metadata> {
  const { lang, slug } = await params
  const post = await getPost(slug, lang)

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post?.featuredImage?.node?.sourceUrl ? [{
        url: post?.featuredImage?.node?.sourceUrl,
        width: 1200,
        height: 630,
        alt: post?.featuredImage?.node?.altText || post?.title,
      }] : [],
    }
  }
}

export default async function BlogPostPage({ params }: any) {
  const { lang, slug } = await params
  const post = await getPost(slug, lang)

  if (!post) return null // Handle 404 case

  return (
    <main className="pt-20">
      <BlogPost post={post} lang={lang} />
    </main>
  )
}

