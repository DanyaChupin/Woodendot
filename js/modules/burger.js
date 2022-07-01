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
export default burger
