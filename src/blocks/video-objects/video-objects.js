$(document).ready(function () {
  $('.video-objects__sliderBlock').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          variableWidth: true,
        }
      },
    ]
  });
  $('.video-objects__btnNext').on('click',function(){
    $('.video-objects__sliderBlock').slick('slickNext');
  });
});