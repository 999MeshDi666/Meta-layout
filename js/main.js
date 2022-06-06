var swiperCoverflow = new Swiper('.swiper_coverflow',{
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true, 
  slidesPerView: 'auto',
   
  coverflowEffect: {
    rotate: 0,
    stretch: -60,
    depth: 420,
    modifier: 2.2,
    slideShadows: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    576: {
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 320,
        modifier: 2,
      },
    },
    992: {
      slidesPerView: 'auto',
    }
  }
     
});


var swiperDefault = new Swiper('.swiper_default',{
  speed: 1000,
  slidesPerView: 3,
  allowTouchMove: false,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
 
  breakpoints: {
    320: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    576:{
      spaceBetween: 270,
    },
    992:{
      spaceBetween: 230,
    },
    1200:{
      spaceBetween: 400,
    },
    1400:{
      spaceBetween: 700,
    }
   
  }
});

window.addEventListener('scroll', ()=>{
  swiperDefault.slideNext();
})