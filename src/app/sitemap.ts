
import { getAllPosts } from '@/lib/wordpress';
import type { MetadataRoute } from 'next';

// Generate the sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const content = await getAllPosts();

    const posts = content?.nodes || [];

    // Base URL for the sitemap
    const baseUrl = process.env.NEXT_PUBLIC_apis?.replace('/api', '') || 'https://headlinks.com';

    // Static routes
    const staticRoutes = [
        { url: '/ar', priority: 0.9 },
        { url: '/en', priority: 0.9 },
        { url: '/ar/blog', lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.9 },
        { url: '/en/blog', lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.9 },
    ];

    // Dynamic routes for blog posts
    const blogRoutes = posts.map((post: any) => ({
        url: `/${post?.language?.code.toLowerCase()}/blog/${encodeURI(post.slug)}`,
        // url: `/ar/blog/${encodeURI(post.slug)}`,
        lastModified: post?.modified ? post.modified : new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));
    console.log('Blog Routes:', blogRoutes);

    // Format the sitemap entries
    const sitemapEntries: any = [...staticRoutes, ...blogRoutes].map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        // priority: route.priority,
    }));

    return sitemapEntries;
}