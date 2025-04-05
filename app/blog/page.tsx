import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogPreviewCard from "@/components/blog-preview-card"

export const metadata = {
  title: "Blog | WinDeck - AI-powered proposal generator",
  description: "Read the latest articles and insights on creating winning proposals and growing your service business.",
  openGraph: {
    title: "Blog | WinDeck - AI-powered proposal generator",
    description:
      "Read the latest articles and insights on creating winning proposals and growing your service business.",
    images: [{ url: "/assets/og-windeck.jpg" }],
  },
}

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">WinDeck Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Insights and tips to help you create winning proposals and grow your service business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPreviewCard
              title="How to write a proposal in 2025"
              excerpt="Learn the latest techniques and tools for creating winning proposals in the AI era."
              slug="how-to-write-a-proposal-in-2025"
              date="April 5, 2025"
              featured={true}
            />

            <BlogPreviewCard
              title="5 common proposal mistakes to avoid"
              excerpt="Don't let these common pitfalls cost you your next client opportunity."
              slug="5-common-proposal-mistakes-to-avoid"
              date="March 28, 2025"
            />

            <BlogPreviewCard
              title="Client psychology: What makes them say yes"
              excerpt="Understanding the psychology behind client decision-making can help you craft more persuasive proposals."
              slug="client-psychology-what-makes-them-say-yes"
              date="March 15, 2025"
            />

            <BlogPreviewCard
              title="The art of pricing your services"
              excerpt="How to price your services to maximize value and win more clients."
              slug="the-art-of-pricing-your-services"
              date="March 10, 2025"
            />

            <BlogPreviewCard
              title="From discovery call to proposal: A complete guide"
              excerpt="A step-by-step guide to turning client conversations into winning proposals."
              slug="from-discovery-call-to-proposal-a-complete-guide"
              date="March 5, 2025"
            />

            <BlogPreviewCard
              title="How to follow up after sending a proposal"
              excerpt="Best practices for following up with clients to increase your proposal win rate."
              slug="how-to-follow-up-after-sending-a-proposal"
              date="February 28, 2025"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Get the latest articles, tips, and resources delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 flex-grow"
                  />
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white">Subscribe</Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-violet-100 p-6 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
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

