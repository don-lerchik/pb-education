$(document).ready(function () {
  $('.pagination__selector-choise').on('click', function(e){
    $('.pagination__selector-choise').toggleClass('active');
    $('.pagination__selectorList').slideToggle();
}); 
});