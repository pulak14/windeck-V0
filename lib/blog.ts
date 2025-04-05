import type { ReactNode } from "react"

interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  readingTime: number
  content: ReactNode
}

// This is a mock function that would normally fetch from a CMS or MDX files
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // For the demo, we'll just return mock data for the sample post
  if (slug === "how-to-write-a-proposal-in-2025") {
    return {
      title: "How to write a proposal in 2025",
      slug: "how-to-write-a-proposal-in-2025",
      date: "April 5, 2025",
      excerpt: "Learn the latest techniques and tools for creating winning proposals in the AI era.",
      readingTime: 8,
      content: (
        <>
          <p>
            In today's fast-paced business environment, the ability to create compelling proposals quickly can be the
            difference between winning and losing clients. With the advent of AI tools like WinDeck, the proposal
            writing process has been revolutionized.
          </p>

          <h2>The Evolution of Proposal Writing</h2>
          <p>
            Proposal writing has come a long way from the days of Word templates and manual formatting. In 2025,
            AI-powered tools have transformed how service professionals approach this critical business function.
          </p>

          <p>Here are the key elements of a winning proposal in 2025:</p>

          <h3>1. Client-Centric Approach</h3>
          <p>
            The most successful proposals focus relentlessly on the client's needs, challenges, and desired outcomes. AI
            tools can now analyze client discovery notes to identify key pain points and priorities, ensuring your
            proposal addresses what matters most.
          </p>

          <h3>2. Visual Storytelling</h3>
          <p>
            In 2025, proposals are no longer just text documents. They incorporate visual elements that tell a
            compelling story about how your services will solve the client's problems. Charts, diagrams, and custom
            graphics help communicate complex ideas simply and memorably.
          </p>

          <h3>3. Personalization at Scale</h3>
          <p>
            Modern proposal tools allow for deep personalization without the time investment previously required. AI can
            analyze past client interactions, industry trends, and your unique service offerings to create tailored
            proposals that resonate with each specific client.
          </p>

          <h3>4. Data-Backed Value Propositions</h3>
          <p>
            Successful proposals in 2025 go beyond promises to include data-backed projections of ROI, time savings, or
            other relevant metrics. AI tools can help generate realistic forecasts based on your past project outcomes
            and industry benchmarks.
          </p>

          <h3>5. Interactive Elements</h3>
          <p>
            Static PDFs are being replaced by interactive proposals that allow clients to explore different options,
            view case studies, or even simulate project outcomes. These interactive elements increase engagement and
            help clients visualize the value you'll provide.
          </p>

          <h2>The AI Advantage</h2>
          <p>Tools like WinDeck are changing the game by:</p>

          <ul>
            <li>Reducing proposal creation time from hours to minutes</li>
            <li>Ensuring consistent quality across all client communications</li>
            <li>Analyzing which proposal elements lead to higher win rates</li>
            <li>Allowing for real-time collaboration among team members</li>
            <li>Providing data-driven insights to continuously improve your approach</li>
          </ul>

          <h2>Best Practices for 2025</h2>

          <h3>Start with a Discovery Process</h3>
          <p>
            Even with AI tools, the quality of your input determines the quality of your output. Conduct thorough
            discovery calls and document client needs carefully to feed into your proposal generation process.
          </p>

          <h3>Customize Your Templates</h3>
          <p>
            While AI can generate proposals from scratch, having industry-specific templates as starting points can
            improve results. Invest time in creating templates that reflect your unique value proposition and service
            approach.
          </p>

          <h3>Review and Refine</h3>
          <p>
            AI-generated proposals should be reviewed and refined by humans before sending. Look for opportunities to
            add personal touches, client-specific insights, or creative elements that AI might miss.
          </p>

          <h3>Track and Analyze Results</h3>
          <p>
            Use the analytics features in modern proposal tools to track which proposals win business and why.
            Continuously refine your approach based on this data.
          </p>

          <h2>Conclusion</h2>
          <p>
            The proposal writing process has been transformed by AI, but the fundamental goal remains the same: to
            clearly communicate how your services will solve the client's problems and deliver value. By embracing these
            new tools and techniques, you can create more effective proposals in less time, ultimately winning more
            business and growing your service practice.
          </p>

          <p>
            Ready to transform your proposal process? Join the WinDeck waitlist today and be among the first to
            experience the future of proposal creation.
          </p>
        </>
      ),
    }
  }

  // For other slugs, return null (would 404 in production)
  return null
}

export async function getAllBlogPosts(): Promise<Omit<BlogPost, "content">[]> {
  // In a real app, this would fetch from a CMS or read MDX files
  return [
    {
      title: "How to write a proposal in 2025",
      slug: "how-to-write-a-proposal-in-2025",
      date: "April 5, 2025",
      excerpt: "Learn the latest techniques and tools for creating winning proposals in the AI era.",
      readingTime: 8,
    },
    {
      title: "5 common proposal mistakes to avoid",
      slug: "5-common-proposal-mistakes-to-avoid",
      date: "March 28, 2025",
      excerpt: "Don't let these common pitfalls cost you your next client opportunity.",
      readingTime: 6,
    },
    {
      title: "Client psychology: What makes them say yes",
      slug: "client-psychology-what-makes-them-say-yes",
      date: "March 15, 2025",
      excerpt:
        "Understanding the psychology behind client decision-making can help you craft more persuasive proposals.",
      readingTime: 7,
    },
  ]
}

