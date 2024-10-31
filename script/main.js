// 배너슬라이드
var swiper = new Swiper(".mainSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSwiper .swiper-button-next",
      prevEl: ".mainSwiper .swiper-button-prev",
    },
  });

//   뉴 슬라이드
  var newSwiper = new Swiper(".newSwiper", {
    slidesPerView: 1.2, //모바일 먼저
    spaceBetween: 20,
    breakpoints: {
        1024 :{
            slidesPerView: 3, //pc
            spaceBetween: 10,
        }
    },
    pagination: {
      el: ".newSwiper .swiper-pagination",
      clickable: true,
    },
  });