const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-forward',
      prevEl: '.swiper-button-back',
    },
  });