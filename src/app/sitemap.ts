import client from '@/lib/apollo-client';
import { getAllPosts } from '@/lib/wordpress';
import { gql } from 'graphql-tag';
import type { MetadataRoute } from 'next';

// Fetch all posts and pages from WordPress using GraphQL
// export const getAllPosts = async () => {
//     try {
//         const allposts = gql`
//             query Posts {
//                 posts(first: 1000, where: {language: AR}) {
//                     nodes {
//                         slug
//                         modified
//                         language { 
//                             code
//                         }
//                     }
//                 }
//                 pages(first: 1000, where: {language: AR}) {
//                     nodes {
//                         slug
//                         modified
//                         language { 
//                             code
//                         }
//                     }
//                 }
//             }
//         `;
//         const { data } = await client.query({ query: allposts, fetchPolicy: 'no-cache' });
//         return data;
//     } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error('Error fetching posts and pages:', error);
//         return { posts: { nodes: [] }, pages: { nodes: [] } };
//     }
// };

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