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

export default tabs
