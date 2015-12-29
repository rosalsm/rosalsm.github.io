;(function(){

$('.fa-bars').on('click', function(){
  $('.navigator').addClass('show-nav').removeClass('navigator');
  $('.fa-bars').addClass('no-hamburger').removeClass('fa-bars');
  console.log("hamburger test")
})



})(); //END OF IIFE


// $('i.fa-bars').on('click', function(){
//           $('.tabs-header').addClass('show-header').removeClass('tabs-header');
//           console.log("changing header")
