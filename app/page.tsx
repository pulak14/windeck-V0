"use client"

import { useEffect } from "react"

export default function Waitlist() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://tally.so/widgets/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        data-tally-src="https://tally.so/r/wvzYVX?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Waitlist"
      ></iframe>
    </div>
  )
}

