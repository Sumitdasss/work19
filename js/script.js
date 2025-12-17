$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: '<button type="button" class="absolute top-[423px] left-[600px]  z-10 w-10 h-10 bg-amber-700 text-white rounded-full hover:bg-white border-2 border-amber-700 transition-all hover:text-black"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="absolute top-[423px] left-[896px]  z-10 w-10 h-10 bg-amber-700 text-white rounded-full hover:bg-white border-2 border-amber-700 transition-all hover:text-black"><i class="fa-solid fa-arrow-right"></i></button>',
});