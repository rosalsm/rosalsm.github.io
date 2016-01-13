;(function(){

  document.write('<style type="text/css">body{display:none}</style>');
  jQuery(function($) {
  $('body').css('display','block');
  });


//WHEN CLICK HAMBURGER, WE SEE THE MENU AND COME BACK
$('.fa-bars').on('click', function(){
  //$('.navigator').addClass('show-nav').removeClass('navigator');
  //$('.fa-bars').addClass('no-hamburger').removeClass('fa-bars');
  $('nav').toggleClass('show-nav navigator');
  console.log("hamburger test")
});

//WHEN WE CLICK THE MENU, WE COME BACK TO HAMBURGER
$('nav a').on('click', function(){
  $('.show-nav').addClass('navigator').removeClass('show-nav');
  //$('.no-hamburger').addClass('fa-bars').removeClass('no-hamburger');
  console.log("testing back")

});

//WHEN CLICK OUTSIDE THE MENU, COME BACK TO HAMBURGER
$('.container').on('click', function(){
  $('.show-nav').addClass('navigator').removeClass('show-nav');
  //$('.no-hamburger').addClass('fa-bars').removeClass('no-hamburger');
  console.log("coming back to hamburger")

})




//SCROLL THE PAGE TO GO TO A DIFFERENT SECTION
$('.navigator a[href="#portfolio"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#portfolio').offset().top}, 'slow');
});

$('.navigator a[href="#about"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#about').offset().top}, 'slow');
});

$('.navigator a[href="#contact"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#contact').offset().top}, 'slow');
});

$('h4 a[href="#about"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#about').offset().top}, 'slow');
});

})(); //END OF IIFE
