$(function(){


    $('.slider__inner').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
   

    });

    $('.works__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
      autoplay: true,
      autoplaySpeed: 4000,
    });
  });