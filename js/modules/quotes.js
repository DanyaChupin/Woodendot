function quote() {
  const quotes = [
    {
      name: '― R. Aoun, United Kingdom',
      text:
        'The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!',
    },
    {
      name: '― Tilda W.',
      text:
        'Pelican shelf is a beutiful, timeless and functional design piece. Ordering was easy and delivery was quick even to Nordics. What made me most happy was finding out that the brand is also sustainable.',
    },
    {
      name: '― Alexandra J.',
      text:
        'Love the design, the variety of possible combinations, and the one I chose, it’s “superbe” !',
    },
    {
      name: '― Pablo K.',
      text:
        'The craftsmanship, the customer service and of course the functionality of the piece I bought are all excellent. Totally recommendable!',
    },
    {
      name: '― Jeannette d.B.',
      text:
        'The products are of high quality and the materials used are simply beautiful and esthetic.The wood used gives the products a warm look and the details(e.g.round table legs and rounded edges for the pelican shelves) make the products lovely.Products were shipped to Holland using very proper packaging.Cannot wait to place these products in our new house!',
    },
    {
      name: '― David H.',
      text:
        'In a crazy time of global crisis it’s been such retreat from negativity to be able to settle into my new home with gorgeous design and unique pieces.I love the look! - David, NYC',
    },
    {
      name: '― Blanca P.g.',
      text:
        'I simply love the brand’s philosophy. I need to build a house where I really feel comfortable at and I believe that your products trully help in acomplishing it 😊',
    },
  ]
  const info = document.querySelector('.quote__title'),
    author = document.querySelector('.quote__subtutle')
  let currentQuote = 0
  const item = quotes[currentQuote]
  author.textContent = item.name
  info.textContent = item.text

  function showQuotes(person) {
    const item = quotes[person]
    author.textContent = item.name
    info.textContent = item.text
  }

  setInterval(() => {
    currentQuote++
    if (currentQuote > quotes.length - 1) {
      currentQuote = 0
    }
    if (currentQuote < 0) {
      currentQuote = quotes.length - 1
    }
    showQuotes(currentQuote)
  }, 5000)

  let dotsIndex = 1
  dotsInterval(dotsIndex)
  function dotsInterval(n) {
    let quoteBtns = document.getElementsByClassName('quote__btn')

    if (n > quoteBtns.length) {
      dotsIndex = 1
    }
    for (let dots of quoteBtns) {
      dots.classList.remove('quote__btn--active')
    }
    quoteBtns[dotsIndex - 1].classList.add('quote__btn--active')
  }
  let timer = 0

  function makeTimer() {
    timer = setInterval(() => {
      dotsIndex++
      dotsInterval(dotsIndex)
    }, 5000)
  }
  makeTimer()
}

export default quote
