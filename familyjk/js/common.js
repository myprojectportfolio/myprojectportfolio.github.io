$(function() {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(this).parent().next().next().find(".main-mnu").slideToggle();
    return false;
  });

  $('.s-profile').parallax({imageSrc: 'img/profile.JPG'});
  $('.s-invest').parallax({imageSrc: 'img/investoram.JPG'});

 
  $(function(){
    $("#phone1").mask("+38(999) 999-9999");
  });

  $(function(){
    $("#phone2").mask("+38(999) 999-9999");
  });

  $(document).on('click', 'a.page-scroll', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 50
  }, 800, 'easeInOutExpo');
  event.preventDefault();
});


$('.animenu__nav li a').on('click', function() {
  if ($('.animenu__toggle').css('display') != 'none') {
    $(".animenu__toggle").trigger("click");
  }
});


$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.mnu-line').addClass("sticky");
  }
  else{
    $('.mnu-line').removeClass("sticky");
  }
});

$(document).ready(function() {
  $('.popup-vimeo, .popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    gallery: {
      tCounter: '%curr% из %total%',
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 400, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
  });
});

$(document).ready(function() {
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
});

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: '',
    mainClass: 'mfp-zoom-in',

    gallery: {
      tCounter: '%curr% из %total%',
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 400, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    
  });
});

$(".animenu ul a").mPageScroll2id();

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
    480: {
      items: 2
    },
    992: {
      items: 4
    },
    
    
  }
});

function carouselService() {
    $('.carousel-item').each(function() {
      var t = $(this),
      h = t.find('.carousel-text').outerHeight();
      t.find('.carousel-pic').css('min-height', h);
    });
  }carouselService();

});
$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');


});
