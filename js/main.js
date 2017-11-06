$(document).ready(function() {
  $('body').removeClass('no-js');
  $('.singlepost').addClass('animated fadeIn');
  img = $('p img[alt="coverimage"]').attr('src');
  if (typeof img != 'undefined') {
    if (screen.width > 960) {
      $('header').css("background-color", "#131313"); // shoud be #151515 weird
      $('header').css("background-image", "");
      $('.panel-cover--overlay').fadeOut(500);
    } else {
      $('header').css("background-image", "url(" + img + ")");
      $('p img[alt="coverimage"]').css('display', 'none').next('sup').css('display', 'none')
    }
  }

  if ((window.location.hash && window.location.hash == "#blog") || (window.location.pathname.substring(0, 5) == "/tag/") || (window.location.pathname.substring(0, 6) == "/page/") || (window.location.pathname.substring(0,8) == "/resume/")) {
    animateSider();
  }

  if ($('.panel-cover').hasClass( "panel-cover--collapsed") == false) {
    $('.panel-cover__title').addClass('animated fadeIn');
    $('.panel-cover__description').addClass('animated fadeIn');
    $('.navigation-wrapper').addClass('animated fadeInDown');
  } else {
    $('.mobile-top-right-button').css('display', 'block');
    $('.mobile-top-right-button').addClass('animated fadeInDown');
  }

  $('.btn-mobile-menu__icon').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
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
    if (screen.width > 960) {
      $('.panel-cover').addClass('panel-cover--collapsed animated fadeInLeft');
    } else {
      $('.panel-cover').addClass('panel-cover--collapsed animated fadeInDown');
      $('.mobile-top-right-button').css('display', 'block');
      $('.mobile-top-right-button').addClass('animated fadeInDown');
    }
    $('article').addClass('animated fadeIn');
  }
});
