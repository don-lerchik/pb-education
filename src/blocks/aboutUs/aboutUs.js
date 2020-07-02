$(document).ready(function () {
  $('.aboutUs__sliderBlock').slick({
    dots: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          centerMode: false,
          variableWidth: true,
          slidesToShow: 1,
        }
      },
    ]
  });
});