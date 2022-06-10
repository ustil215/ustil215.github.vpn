new Swiper('.slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   slidesPerView: 2.6,
   spaceBetween: 20,
   breakpoints: {
      1024: {
         slidesPerView: 2.6,
      },
      768: {
         slidesPerView: 2,
      },
      425: {
         slidesPerView: 1,
      },
      375: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1,
      }
   },
});