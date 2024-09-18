// REVIEW SLIDER SETTING START HERE
var swiper = new Swiper(".reviewSwiper", {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
        500: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1160: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1620: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

// Ensure swiper instance is fully initialized before using slideTo
swiper.on("init", function () {
    swiper.slideTo(2, 0);
});

// INITIALIZE SWIPER
swiper.init();