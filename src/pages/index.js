import React from "react"

import SEO from "../components/seo"
import RandomQuote from "../components/randomQuoteGenerator"
import "../styles/style.css"

const IndexPage = () => {
  console.log("hii")
  return (
    <div className="bg-teal-300 w-screen h-screen p-6">
      <SEO />
      <RandomQuote />
    </div>
  )
}

export default IndexPage
