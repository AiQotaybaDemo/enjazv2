import { GraphQLClient } from "graphql-request"

const endpoint = process.env.WORDPRESS_API_URL || "https://wordpress.ahmed-albakor.com/graphql"

export const graphQLClient = new GraphQLClient(endpoint)

export interface Post {
  id: string
  date: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  language: {
    code: string
    locale: string
  }
}

export interface PostsResponse {
  posts: {
    nodes: Post[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}

// Map locale to WordPress language code
const getLanguageCode = (locale: string) => {
  return locale.toUpperCase() === "AR" ? "AR" : "EN"
}

export const getLatestPosts = async (locale = "en", first = 3) => {
  const query = `
    query LatestPosts($language: LanguageCodeFilterEnum!, $first: Int!) {
      posts(
        first: $first
        where: { language: $language }
      ) {
        nodes {
          id
          date
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          language {
            code
            locale
          }
        }
      }
    }
  `

  const variables = {
    language: getLanguageCode(locale),
    first,
  }

  try {
    const data = await graphQLClient.request<PostsResponse>(query, variables)
    return data.posts.nodes
  } catch (error) {
    console.error("Error fetching latest posts:", error)
    return []
  }
}

export const getAllPosts = async (locale = "en", first = 9, after?: string) => {
  const query = `
    query AllPosts($language: LanguageCodeFilterEnum!, $first: Int!, $after: String) {
      posts(
        first: $first
        after: $after
        where: { language: $language }
      ) {
        nodes {
          id
          date
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          language {
            code
            locale
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `

  const variables = {
    language: getLanguageCode(locale),
    first,
    after,
  }

  try {
    const data = await graphQLClient.request<PostsResponse>(query, variables)
    return data.posts
  } catch (error) {
    console.error("Error fetching all posts:", error)
    return { nodes: [], pageInfo: { hasNextPage: false, endCursor: "" } }
  }
}

export const getPost = async (slug: string, lang: any) => {
  const query = `
    query PostBySlug($slug: String!,$language: LanguageCodeFilterEnum!) {
      posts(where: { name: $slug,language: $language }) {
        nodes {
          id
          date
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          language {
            code
            locale
          }
        }
      }
    }
  `

  const variables = {
    slug : decodeURIComponent(slug),
    language: getLanguageCode(lang),
  }

  try {
    const data = await graphQLClient.request<{ posts: { nodes: Post[] } }>(query, variables)
    return data.posts.nodes[0] || null
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

