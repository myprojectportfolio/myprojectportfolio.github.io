$(function() {

  $("#profile_grid").mixItUp({
      load: {
      filter:'.category-1'
 
      }
    });

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(this).parent().next().next().find(".main-mnu").slideToggle();
    return false;
  });

  $('.s-advant').parallax({imageSrc: 'img/students_1.jpg'});
  $('.main-head').parallax({imageSrc: 'img/header2.jpg'});
  $('.s-team').parallax({imageSrc: 'img/students_1.jpg'});

  $(function(){
    $("#phone1").mask("+38(999) 999-9999");
    $("#phone2").mask("+38(999) 999-9999");
  });

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.mnu-line').addClass("sticky");
  }
  else{
    $('.mnu-line').removeClass("sticky");
  }
});



$(document).on('click', 'a.page-scroll', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 0
  }, 800, 'easeInOutExpo');
  event.preventDefault();
});

$('.partners').owlCarousel({
  loop: true,
  smartSpeed: 100,
  dots: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    992: {
      items: 3
    },
    
    
  }
});


});

$(window).scroll(function() {
  if ($(this).scrollTop() > $(this).height()) {
    $('.top').addClass('active');
  } else {
    $('.top').removeClass('active');
  }
});
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

$(window).on('load', function() {
  $('.preloader').delay(300).fadeOut('slow');

  $(".animation_4 h1").animated("lightSpeedIn", "fadeOutUp");
  $(".animation_4 h2").animated("fadeInUp", "fadeOutDown");
  $(".animation_4 h3").animated("lightSpeedIn", "fadeOutUp");
  $(".animation_1").animated("bounceInLeft", "fadeOutDown");
  $(".animation_2").animated("bounceInRight", "fadeOutDown");
  $(".animation_3").animated("flipInY", "fadeOutDown");
});