$(document).ready(function () {

  $('.slider-wrapper .prev > i').click(function(){
    $('.slider-wrapper .images img').addClass('active');

    $('.active-first').show("fade",500);
    
  });

  $('.slider-wrapper .next > i').click(function(){
    $('.slider-wrapper .images img').addClass('active');
  });




});
