/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burger() {
  const burgerBtn = document.querySelector('.header__burger')
  const burgerMenu = document.querySelector('.header__nav')

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active')
    if (burgerMenu.classList.contains('menu--active')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);


/***/ }),

/***/ "./js/modules/quotes.js":
/*!******************************!*\
  !*** ./js/modules/quotes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quote);


/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slide() {
  const mediaQueryMin = window.matchMedia('(max-width: 1024px)')
  const mediaQueryMax = window.matchMedia('(min-width: 1024px)')
  if (mediaQueryMin.matches) {
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    prev.addEventListener('click', () => {
      showImage(-1)
    })
    next.addEventListener('click', () => {
      showImage(1)
    })
    let index = 0
    showImage(index)
    function showImage(i) {
      index += i
      const images = document.querySelectorAll('.gallery__item')

      const dots = document.querySelectorAll('.gallery__btn')
      for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(
          'gallery__btn--active',
          '',
        )

      if (index > images.length - 1) index = 0

      if (index < 0) index = images.length - 1

      images[index].style.display = 'block'
      dots[index].className += ' gallery__btn--active'
    }
  }
  if (mediaQueryMax.matches) {
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    prev.addEventListener('click', () => {
      slidePrevie(-1)
    })
    next.addEventListener('click', () => {
      slidePrevie(1)
    })
    let index = 0
    slidePrevie(index)
    function slidePrevie(i) {
      index += i
      const imagesCarts = document.querySelectorAll('.gallery__items')
      const dots = document.querySelectorAll('.gallery__btn')
      for (i = 0; i < imagesCarts.length; i++) {
        imagesCarts[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(
          'gallery__btn--active',
          '',
        )

      if (index > imagesCarts.length - 1) index = 0

      if (index < 0) index = imagesCarts.length - 1

      imagesCarts[index].style.display = 'flex'
      dots[index].className += ' gallery__btn--active'
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slide);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  const oneBtnFooter = document.querySelector('[data-current="1"]')
  const twoBtnFooter = document.querySelector('[data-current="2"]')
  const threeBtnFooter = document.querySelector('[data-current="3"]')
  const oneMenuFooter = document.querySelector('[data-menu="1"]')
  const twoMenuFooter = document.querySelector('[data-menu="2"]')
  const threeMenuFooter = document.querySelector('[data-menu="3"]')

  function menuInter(oneElement, twoElement) {
    oneElement.addEventListener('click', () => {
      twoElement.classList.toggle('hide')
    })
  }

  menuInter(oneBtnFooter, oneMenuFooter)
  menuInter(twoBtnFooter, twoMenuFooter)
  menuInter(threeBtnFooter, threeMenuFooter)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide */ "./js/modules/slide.js");
/* harmony import */ var _modules_quotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/quotes */ "./js/modules/quotes.js");





window.addEventListener('DOMContentLoaded', function () {
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])()
  ;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])()
  ;(0,_modules_slide__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_modules_quotes__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map