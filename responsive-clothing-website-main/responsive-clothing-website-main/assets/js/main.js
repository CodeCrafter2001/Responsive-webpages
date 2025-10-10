/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById('nav--menu'),
navToogle= document.getElementById('nav--toogle'),
navClose= document.getElementById('nav--close')

//  menu Show
 if(navToogle){
    navToogle.addEventListener('click', ()=>{
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
