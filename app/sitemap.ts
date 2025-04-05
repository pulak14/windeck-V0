import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://windeck.app"

  // Get all blog posts
  const blogPosts = await getAllBlogPosts()

  // Static routes
  const routes = ["", "/product", "/features", "/solutions", "/blog", "/waitlist"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}

