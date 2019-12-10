# random-quote-generator

done with gatsby, tailwind, netlify

check it out [here](https://priceless-jackson-8e782f.netlify.com/)

tried to generate random quoute automatically on fetch, but "gatsby build" does ssr, which generates quoute statically in index.html. As a result, when you fetch homepage, first you get index.html with INITIAL quote, which gets overdrawn with client-side render(react component generates new quote). I guess that's called isomorphic rendering? anyways, animation of overdrawing the quote instantly on load was not nice, so I added css "bounce" animation

```
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    transform: scale(0.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```
