import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/style.css"

export default () => {
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

  const quotes = data.allDataJson.edges[0].node.quotes
    console.log('from outside')
  const [randomQuote, setRandomQuote] = useState(() => {
    
    const initialQuote = generateQuote()
    console.log('from inside', initialQuote)
    return initialQuote
  })
  console.log('from outSide', randomQuote)

  function generateQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

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
      <button
        onClick={() => setRandomQuote(generateQuote())}
        className="bg-teal-700 ml-8 w-32 shadow-xl outline-none"
      ></button>
    </div>
  )
}
