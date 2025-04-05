import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Solutions | WinDeck - AI-powered proposal generator",
  description: "Discover how WinDeck helps freelancers, consultants, and agencies create winning proposals.",
  openGraph: {
    title: "Solutions | WinDeck - AI-powered proposal generator",
    description: "Discover how WinDeck helps freelancers, consultants, and agencies create winning proposals.",
    images: [{ url: "/assets/og-windeck.jpg" }],
  },
}

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:py-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">
              Solutions for Service Professionals
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              Tailored proposal solutions for freelancers, consultants, and agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Freelancers & Consultants</h2>
              <p className="text-gray-600 mb-6">
                As a solo professional, your time is your most valuable asset. WinDeck helps you create professional
                proposals in minutes, so you can focus on client work instead of admin tasks.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save hours on proposal creation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Present a professional image to clients</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Win more projects with persuasive proposals</span>
                </li>
              </ul>

              <Link href="/waitlist">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
              </Link>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500">Freelancer case study coming soon</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="order-2 md:order-1 bg-gray-100 rounded-xl p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500">Agency case study coming soon</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Small Agencies</h2>
              <p className="text-gray-600 mb-6">
                Streamline your agency's proposal process and ensure consistency across all client communications.
                WinDeck helps your team create on-brand proposals that win business.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain brand consistency across all proposals</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborate with team members in real-time</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-violet-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scale your proposal process as your agency grows</span>
                </li>
              </ul>

              <Link href="/waitlist">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600">Testimonials coming soon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="italic text-gray-600">Testimonial placeholder</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Name</p>
                  <p className="text-sm text-gray-500">Position, Company</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="italic text-gray-600">Testimonial placeholder</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Name</p>
                  <p className="text-sm text-gray-500">Position, Company</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="italic text-gray-600">Testimonial placeholder</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold">Name</p>
                  <p className="text-sm text-gray-500">Position, Company</p>
                </div>
              </div>
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

