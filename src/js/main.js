;(function(){

$('.fa-bars').on('click', function(){
  $('.navigator').addClass('show-nav').removeClass('navigator');
  $('.fa-bars').addClass('no-hamburger').removeClass('fa-bars');
  console.log("hamburger test")
});

$('.navigator a[href="#portfolio"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#portfolio').offset().top}, 'slow');
});

$('.navigator a[href="#about"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#about').offset().top}, 'slow');
});

$('.navigator a[href="#contact"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#contact').offset().top}, 'slow');
});

})(); //END OF IIFE
