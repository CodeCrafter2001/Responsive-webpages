 /*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

// menu Show
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-Menu');
    })
}

// menu hide
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-Menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink= document.querySelectorAll('.nav_link');
const linkAction= ()=>{
    const navMenu= document.getElementById('nav__menu');
    navMenu.classList.remaove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  grabCursor: true,
   slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakPoints:{
    768:{
        slidesPerView: 3,
        centeredSlides: 'auto',
    },
    1152:{
        centeredSlides: 'auto',
        spaceBetween: -64, 
    }
  }
})
 

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = ()=>{
    const header= document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
})
sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1, origin: 'bottonm', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, { origin: 'bottonm'})