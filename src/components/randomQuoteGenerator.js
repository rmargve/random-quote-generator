import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/style.css"

export default () => {
  // const data = useStaticQuery(graphql`
  //   query fetchQuotes {
  //     allDataJson {
  //       edges {
  //         node {
  //           id
  //           quotes {
  //             quote
  //             author
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const quotes = data.allDataJson.edges[0].node.quotes

  const quotes = [
    {
      "quote": "Life isn’t about getting and having, it’s about giving and being.",
      "author": "Kevin Kruse"
    },
    {
      "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      "author": "Robert Frost"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "author": "Florence Nightingale"
    },
    {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
    }
  ]
  
  const [randomQuote, setRandomQuote] = useState(() => {
    const initialQuote = generateQuote()
    return initialQuote
  })

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
