var swiper = new Swiper('.swiper',{
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