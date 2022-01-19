let navbar = document.querySelector('.header .navbar')
let menuBtn = document.querySelector('#menu-btn')

menuBtn.onClick = () => {
  menuBtn.classList.toggle('fa-times')
}