import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getBlogPost } from "@/lib/blog"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | WinDeck Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | WinDeck Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | WinDeck Blog`,
      description: post.excerpt,
      images: [{ url: "/assets/og-windeck.jpg" }],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <article className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 -ml-3">
                ← Back to Blog
              </Button>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">{post.content}</div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link
                  href="/blog/5-common-proposal-mistakes-to-avoid"
                  className="hover:text-violet-600 transition-colors"
                >
                  5 common proposal mistakes to avoid
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Don't let these common pitfalls cost you your next client opportunity.
              </p>
              <Link
                href="/blog/5-common-proposal-mistakes-to-avoid"
                className="text-violet-600 hover:text-violet-700 font-medium"
              >
                Read more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link
                  href="/blog/client-psychology-what-makes-them-say-yes"
                  className="hover:text-violet-600 transition-colors"
                >
                  Client psychology: What makes them say yes
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding the psychology behind client decision-making can help you craft more persuasive proposals.
              </p>
              <Link
                href="/blog/client-psychology-what-makes-them-say-yes"
                className="text-violet-600 hover:text-violet-700 font-medium"
              >
                Read more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/blog/the-art-of-pricing-your-services" className="hover:text-violet-600 transition-colors">
                  The art of pricing your services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">How to price your services to maximize value and win more clients.</p>
              <Link
                href="/blog/the-art-of-pricing-your-services"
                className="text-violet-600 hover:text-violet-700 font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-violet-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your proposal process?</h2>
            <p className="text-xl text-violet-100 max-w-2xl">
              Join the waitlist today and be among the first to experience WinDeck.
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="mt-4 bg-white text-violet-600 hover:bg-gray-100">
                Join the waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
