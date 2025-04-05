import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BlogPreviewCard from "@/components/blog-preview-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:py-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl">
              Turn client discovery notes into polished proposals.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI.
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="mt-4 bg-violet-600 hover:bg-violet-700 text-white">
                Join the waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to create winning proposals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Conversion</h3>
              <p className="mt-2 text-gray-600">
                Convert messy client discovery notes into pitch-ready slides in minutes.
              </p>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Customizable Style</h3>
              <p className="mt-2 text-gray-600">Choose visual style, tone, and brand colors to match your identity.</p>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multiple Export Options</h3>
              <p className="mt-2 text-gray-600">Export to Notion, Google Slides, or PDF with a single click.</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
                View all features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Who It's For</h2>
            <p className="mt-4 text-lg text-gray-600">
              Perfect for service professionals who need to create proposals quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Freelancers & Consultants</h3>
              <p className="mt-2 text-gray-600">
                Save hours on proposal creation and focus on what you do best—delivering great work for clients.
              </p>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Small Agencies</h3>
              <p className="mt-2 text-gray-600">
                Streamline your pitching process and win more clients with professional, consistent proposals.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
                Explore solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest from our Blog</h2>
            <p className="mt-4 text-lg text-gray-600">Tips and insights to help you create better proposals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogPreviewCard
              title="How to write a proposal in 2025"
              excerpt="Learn the latest techniques and tools for creating winning proposals in the AI era."
              slug="how-to-write-a-proposal-in-2025"
              date="April 5, 2025"
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
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
                Read all articles
              </Button>
            </Link>
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

