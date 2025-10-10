/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close')

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


/*=============== SWIPER CLOTHING ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
