;(function(){

    //WHEN CLICK HAMBURGER, WE SEE THE MENU AND COME BACK
    $('.fa-bars').on('click', function(){
      $('nav').toggleClass('show-nav navigator');
    });

    //WHEN WE CLICK THE MENU, WE COME BACK TO HAMBURGER
    $('nav a').on('click', function(){
      $('.show-nav').addClass('navigator').removeClass('show-nav');
    });

    //WHEN CLICK OUTSIDE THE MENU, COME BACK TO HAMBURGER
    $('.container').on('click', function(){
      $('.show-nav').addClass('navigator').removeClass('show-nav');
    });




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
