$(function() {

	$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(this).parent().next().next().find(".main-mnu").slideToggle();
    return false;
  });

  $(function(){
    $("#phone1").mask("+38(999) 999-9999");
   });

  $(function(){
    $("#phone2").mask("+38(999) 999-9999");
  });

  $(function(){
    $("#phone3").mask("+38(999) 999-9999");
  });

  $(document).on('click', 'a.page-scroll', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 0
  }, 800, 'easeInOutExpo');
  event.preventDefault();
});

//   $(function() {
//     $("img.lazy").lazyload();
// });

  $(function() {
    $("img.lazy").lazyload();
});

	// $('img.lazy').lazyload();

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

$('.reviews').owlCarousel({
  loop: true,
  smartSpeed: 700,
  nav: false,
  autoHeight: true,
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
  $(".aanimation_1").animated("bounceInLeft", "fadeOutDown");
  $(".aanimation_2").animated("bounceInRight", "fadeOutDown");
  $(".aanimation_3").animated("flipInY", "fadeOutDown");
});