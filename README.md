# random-quote-generator

built with gatsby & tailwind

check it out [here](https://priceless-jackson-8e782f.netlify.com/)

tried to generate random quoute automatically on fetch, but "gatsby build" generates index.html, which includes generated quoute statically in index.html. As a result, when you fetch homepage, first you get index.html with INITIAL quote, which gets overdrawn with dynamically generated quote(thanks to react render). Animation of overdrawing the quote instantly on load was not nice, so you get same predefined quote on load..
