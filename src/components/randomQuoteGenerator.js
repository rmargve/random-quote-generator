import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/style.css"

function useQuotePool() {
  const [quotePool, setQuotesPool] = useState([])

  const data = useStaticQuery(graphql`
    query fetchQuotes {
      allDataJson {
        edges {
          node {
            id
            quotes {
              quote
              author
            }
          }
        }
      }
    }
  `)

  if (!quotePool.length) {
    setQuotesPool(data.allDataJson.edges[0].node.quotes)
  }

  return quotePool
}

export default () => {
  const quotes = useQuotePool()
  const [randomQuote, setRandomQuote] = useState()

  function generateQuote() {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  console.log('debugging')
  if (!randomQuote) {
    console.log('debugging from inside', randomQuote)
    generateQuote()
  }
  console.log('debugging from outside', randomQuote)

  return (
    <div className="flex justify-center mt-32">
      <div className="bg-teal-600  max-w-3xl flex-initial rounded-lg shadow-xl text-white">
        <p className="text-center text-3xl m-6 font-normal">
          {randomQuote ? randomQuote.quote : ""}
        </p>
        <p className="text-right text-xl m-4">
          {randomQuote ? randomQuote.author : ""}
        </p>
      </div>
      <button onClick={generateQuote} className="bg-teal-700 ml-8 w-32 shadow-xl outline-none">
      </button>
    </div>
  )
}
