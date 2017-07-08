$(document).ready(function() {
  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('article').addClass('animated fadeIn');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
      $('article').addClass('animated fadeIn');
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('article').addClass('animated fadeIn');
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('article').addClass('animated fadeIn');
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 6) == "/page/") {
    $('article').addClass('animated fadeIn');
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if ($('.panel-cover' ).hasClass( "panel-cover--collapsed") == false) {
    $('.panel-cover__logo').addClass('animated fadeInUp');
    $('.panel-cover__title').addClass('animated fadeIn');
    $('.panel-cover__description').addClass('animated fadeIn');
    $('.navigation-wrapper').addClass('animated fadeInDown');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated fadeInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });
});
