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
  slidesPreView: 'auto',
   

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
 

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
