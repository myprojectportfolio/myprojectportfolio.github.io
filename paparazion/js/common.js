$(function() {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(this).parent().next().next().find(".main-mnu").slideToggle();
    return false;
  });

  $('.s-profile').parallax({
    imageSrc: 'img/parallax-1.jpg',
    naturalWidth: 1080,
    naturalHeight: 520
  });
  $('.s-invest').parallax({imageSrc: 'img/pr15.jpg'});

  $(function(){
    $("#phone1").mask("+38(999) 999-9999");
  });

  $(function(){
    $("#phone2").mask("+38(999) 999-9999");
  });

	$(".s-adv").waypoint(function() {

    $({blurRadius: 5}).animate({blurRadius: 0}, {
      duration: 1200,
      easing: 'swing',
      step: function() {
        $(".s-adv-item h3 span").css({
          "-webkit-filter": "blur("+this.blurRadius+"px)",
          "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".s-adv-item h3 span").each(function() {
      var tcount = $(this).data("count");
      $(this).animateNumber({ number: tcount,
        easing: 'easeInQuad',
        "font-size": "34px",
        numberStep: comma_separator_number_step},
        1200);
    });
    this.destroy();  

  }, {
    offset: '70%'
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
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: true,

    gallery: {
      tCounter: '%curr% из %total%',
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
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
  $('.preloader').delay(1000).fadeOut('slow')
});
