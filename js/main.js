$(document).ready(function() {
  $('body').removeClass('no-js');
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
      $('a.blog-button').addClass('hidden');
  }
  $('.singlepost').addClass('animated fadeIn');

  img = $('p img[alt="coverimage"]').attr('src');
  if (typeof img != 'undefined') {
    /* make image ask bg
    $('.panel-cover').css('background', 'transparent');
    $('header').css('background-image', 'transparent');
    $('.panel-cover--overlay').css("background", "transparent");
    $('.fade-overlay').addClass("FadeAway");
    $('.cover-image').css("background", "url(" + img + ") top left no-repeat white");
    $('.cover-image').css("background-size", "cover");
    $('.cover-image').css("width", "700px");
    */
    $('header').css("background-image", "url(" + img + ")");
    $('p img[alt="coverimage"]').css('display', 'none').next('sup').css('display', 'none');
  }

  if ((window.location.hash && window.location.hash == "#blog") || (window.location.pathname.substring(0, 5) == "/tag/") || (window.location.pathname.substring(0, 6) == "/page/")) {
    animateSider();
  }

  if ($('.panel-cover' ).hasClass( "panel-cover--collapsed") == false) {
    $('.panel-cover__logo').addClass('animated fadeInUp');
    $('.panel-cover__title').addClass('animated fadeIn');
    $('.panel-cover__description').addClass('animated fadeIn');
    $('.navigation-wrapper').addClass('animated fadeInDown');
    $('.mobile-top-right-button').addClass('hidden');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated fadeInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });
  
  $('a.blog-button').click(function() {
    animateSider();
  });

  function animateSider() {
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed animated fadeInDown');
      $('.mobile-top-right-button').removeClass('hidden');
    } else {
      $('.panel-cover').addClass('panel-cover--collapsed animated fadeInLeft');
    }
    $('article').addClass('animated fadeIn');
    $('a.blog-button').addClass('hidden');
  }
});
