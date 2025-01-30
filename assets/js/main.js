'use strict';

/* PRELOAD */


const preLoader = document.querySelector('.preload')

window.addEventListener('load',function(){
    preLoader.classList.add('loaded')
    document.body.classList.add('loaded')
})


/* NAVBAR */
const navbar = document.querySelector('.navbar')
const navToggles = document.querySelectorAll('#nav-toggle')
const overlay = document.querySelector('.overlay')



const toggleMenu = function(){
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
}
navToggles.forEach(function(navToggle){
    navToggle.addEventListener('click',toggleMenu)
})


/* HEADER ONSCROLL ANIMATION & BACK TO TOP BTN*/
const header = document.querySelector('.header')
const backToTop = document.querySelector('.back-top-btn')

let lastScrollPos = 0;
const hideHeader = function(){
    const isScrollBottom = lastScrollPos < window.scrollY;
    if(isScrollBottom){
        header.classList.add('hide')
    }else{
        header.classList.remove('hide')
    }
    lastScrollPos = window.scrollY;
}
window.addEventListener('scroll',function(){
    if(this.scrollY >= 50){
        header.classList.add('active')
        hideHeader();
        backToTop.classList.add('active')
    }else{
        header.classList.remove('active')
        backToTop.classList.remove('active')
    }
})

//SWIPER JS
 new Swiper('.swiper', {
    loop: true,
    centerSlider:true,
    fade:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//footer custom date
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear();


