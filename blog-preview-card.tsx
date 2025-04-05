import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BlogPreviewCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  featured?: boolean
}

export default function BlogPreviewCard({ title, excerpt, slug, date, featured = false }: BlogPreviewCardProps) {
  return (
    <Card
      className={`overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}
    >
      <div className={`p-6 flex flex-col ${featured ? "md:flex-row md:items-center md:gap-8" : ""}`}>
        <div className={`${featured ? "md:w-2/3" : "w-full"}`}>
          <div className="mb-3">
            <span className="text-sm text-gray-500">{date}</span>
            {featured && (
              <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            <Link href={`/blog/${slug}`} className="hover:text-violet-600 transition-colors">
              {title}
            </Link>
          </h3>

          <p className="text-gray-600 mb-4">{excerpt}</p>

          <Link href={`/blog/${slug}`} className="text-violet-600 hover:text-violet-700 font-medium">
            Read more →
          </Link>
        </div>

        {featured && (
          <div className="mt-6 md:mt-0 md:w-1/3">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-sm">Featured image</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

