import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Features | WinDeck - AI-powered proposal generator",
  description: "Explore the powerful features of WinDeck that help you create winning proposals in minutes.",
  openGraph: {
    title: "Features | WinDeck - AI-powered proposal generator",
    description: "Explore the powerful features of WinDeck that help you create winning proposals in minutes.",
    images: [{ url: "/assets/og-windeck.jpg" }],
  },
}

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:py-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">Powerful Features</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              Everything you need to create winning proposals in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                Our advanced AI analyzes your client discovery notes and automatically structures them into a coherent,
                persuasive proposal. The AI identifies key client needs, project scope, and value propositions to create
                a compelling narrative.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
              <p className="mt-2 text-gray-600">
                Choose from a variety of visual styles, tones, and color schemes to match your brand identity. Customize
                fonts, layouts, and imagery to create a consistent look and feel across all your proposals.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
              <p className="mt-2 text-gray-600">
                Export your finished proposal to Notion, Google Slides, or PDF with a single click. Share directly with
                clients or download for offline use. All exports maintain your branding and formatting.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
              <h3 className="text-xl font-semibold text-gray-900">Collaboration Tools</h3>
              <p className="mt-2 text-gray-600">
                Invite team members to collaborate on proposals in real-time. Add comments, suggest edits, and track
                changes to ensure everyone is aligned before sending to clients.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Analytics & Insights</h3>
              <p className="mt-2 text-gray-600">
                Track proposal performance with detailed analytics. See when clients view your proposals, which sections
                they spend the most time on, and gain insights to improve your win rate.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Template Library</h3>
              <p className="mt-2 text-gray-600">
                Access a growing library of industry-specific proposal templates. Start with a proven structure and
                customize it to your specific needs.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/waitlist">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
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
