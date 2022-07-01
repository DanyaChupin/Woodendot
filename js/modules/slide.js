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

export default slide
