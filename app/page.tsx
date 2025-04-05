import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Product | WinDeck - AI-powered proposal generator",
  description: "Learn how WinDeck helps you convert client discovery notes into polished proposals in minutes.",
  openGraph: {
    title: "Product | WinDeck - AI-powered proposal generator",
    description: "Learn how WinDeck helps you convert client discovery notes into polished proposals in minutes.",
    images: [{ url: "/assets/og-windeck.jpg" }],
  },
}

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:py-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">Meet WinDeck</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              The AI-powered proposal generator that turns call notes into client-ready decks.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                    <span className="flex items-center justify-center h-6 w-6 text-violet-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Input your notes</h3>
                    <p className="mt-2 text-gray-600">
                      Paste your discovery call notes, meeting transcripts, or client requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                    <span className="flex items-center justify-center h-6 w-6 text-violet-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Customize your deck</h3>
                    <p className="mt-2 text-gray-600">
                      Choose your visual style, tone, and brand colors to match your identity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                    <span className="flex items-center justify-center h-6 w-6 text-violet-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Generate & export</h3>
                    <p className="mt-2 text-gray-600">
                      Get a polished proposal deck in minutes, ready to export to your preferred format.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/waitlist">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500">Product demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose WinDeck</h2>
            <p className="mt-4 text-lg text-gray-600">Save time, impress clients, win more business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Save Hours of Work</h3>
              <p className="mt-2 text-gray-600">Create professional proposals in minutes instead of hours or days.</p>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Increase Win Rates</h3>
              <p className="mt-2 text-gray-600">
                Professional, tailored proposals help you stand out from the competition.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Focus on Clients</h3>
              <p className="mt-2 text-gray-600">
                Spend less time on admin work and more time delivering value to clients.
              </p>
            </Card>
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

