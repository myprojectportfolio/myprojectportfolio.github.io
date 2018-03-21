window.onload = function () { 
if(!window.FormData) {
		var div = ge('content');
		div.innerHTML = "Ваш браузер не поддерживает объект FormData";
		div.className = 'notSupport'; 
	}
}

$(document).ready(function() {

	/* Lazy: Start */
	$('.lazy').Lazy({
		effect: 'fadeIn', 
		effectTime: 250,
		threshold: 0,
		afterLoad: function (e) {
			e.css('display', '')
		}
	});
	/* Lazy: End */

	/* StickyMenu: Start */
	var hmm = $('.main-top-bar'),
	hmmTop = hmm.position().top;
	
	hmm.clone().appendTo("body").addClass('sticky');
	hmm = $('.main-top-bar:eq(1)');	 
	
	$(window).scroll(function () {
		if ( $(this).scrollTop() >= hmmTop + 450 )
			hmm.addClass('visible');
			else hmm.removeClass('visible');
		});
	/* StickyMenu: End */

	/* JCF: Start */
	jcf.setOptions('File', {
		buttonText: 'Обзор',
		placeholderText: 'Прикрепить файл:'
	});

	jcf.replaceAll();
	/* JCF: End */

	/* MagnificPopupTranslations: Start */
	$.extend(true, $.magnificPopup.defaults, {
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка...',
		gallery: {
			tPrev: 'Назад',
			tNext: 'Далее',
			tCounter: '%curr% из %total%'
		},
		image: { tError: '<a href="%url%">Изображение</a> не удалось загрузить.' },
		ajax: { tError: '<a href="%url%">Содержимое</a> не удалось загрузить.' }
	});
	/* MagnificPopupTranslations: End */

	/* MainPopup: Start */
	$('.callback-popup, .callback-popup2, .callback-popup3, .callback-popup4').magnificPopup({
		type: 'inline',
		midClick: true,
		removalDelay: 600,
		mainClass: 'mfp-fade',
		closeMarkup: '<div title="Закрыть (Esc)" class="mfp-close">&#215;</div>',
	});
	/* MainPopup: End */

	/* GalleryWorksPoups: Start */
	$('.gallery-works').each(function() {
		$(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        removalDelay: 600,
	        mainClass: 'mfp-fade',
	        closeMarkup: '<div title="Закрыть (Esc)" class="mfp-close">&#215;</div>',
	        gallery: {
	        	enabled: true,
	        	arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
	        }
	     });
	});
	/* GalleryWorksPoups: End */

	/* DesignPrjsSlider: Start */
	$('.design-prjs-slider').slick({
		vertical: true,
		autoplay: false,
			autoplaySpeed: 5000,
		// verticalSwiping: true,
		prevArrow: '<div class="slick-prev" title="Назад"><svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-up"></use></svg></div>',
		nextArrow: '<div class="slick-next" title="Далее"><svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-down"></use></svg></div>',
	});
	/* DesignPrjsSlider: End */

	/* KindGroupsSlider: Start */
	var kindGroupsSlider = $('.kind-groups-slider');
	kindGroupsSlider.owlCarousel({
		lazyLoad: true,
		center: true,
		autoplay: false,
		loop: true,
		
		autoplaySpeed: 750,
		items: 3,
		margin: 10,
		nav: true,
		navSpeed: 750,
		dragEndSpeed: 750,
		callbacks: true,
		navContainer: false,
		navText: ['<svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-left"></use></svg>', '<svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-right"></use></svg>'],
		responsive : {
	    0 :   { items: 1, },
	    480 : { items: 1, },
	    768 : { items: 3, }
	 }
	});
	
	var totalKGSItems = kindGroupsSlider.find('.owl-item').length;
		 navKGSContainer = kindGroupsSlider.find('.owl-nav');

	if( totalKGSItems >= 3 ) 
		kindGroupsSlider.trigger('next.owl.carousel');

	if( totalKGSItems <= 3 && totalKGSItems !== 1 ) {
		navKGSContainer.removeClass('disabled');
		kindGroupsSlider.on('changed.owl.carousel', function(event) { navKGSContainer.removeClass('disabled'); });
	}

	$('.kgs-item').each(function() {
		$(this).magnificPopup({
        delegate: 'a',
	        type: 'image',
	        removalDelay: 600,
	        mainClass: 'mfp-fade',
	        closeMarkup: '<div title="Закрыть (Esc)" class="mfp-close">&#215;</div>',
	        type: 'image',
        gallery: {
        	enabled:true
        }
     });
	});
	/* KindGroupsSlider: End */

	/* GallerySlider: Start */
	var gallerySlider = $('.gallery-slider');
	gallerySlider.owlCarousel({
		lazyLoad: true,
		center: true,
		autoplay: false,
		loop: true,
		items: 3,
		margin: 10,
		nav: true,
		navSpeed: 750,
		dragEndSpeed: 750,
		
		autoplaySpeed: 750,
		callbacks: true,
		navContainer: false,
		navText: ['<svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-left"></use></svg>', '<svg role="img"><use xlink:href="svg/svg-sprite.svg#icon-arrows-right"></use></svg>'],
		responsive : {
	    0 :   { items: 1, },
	    480 : { items: 2, },
	    768 : { items: 3, }
	 }
	});

	var totalGSItems = gallerySlider.find('.owl-item').length;
	navGSContainer = gallerySlider.find('.owl-nav');
	
	if( totalGSItems >= 3 ) 
		gallerySlider.trigger('next.owl.carousel');

	if( totalGSItems <= 3 && totalGSItems !== 1 ) {
		navGSContainer.removeClass('disabled');
		gallerySlider.on('changed.owl.carousel', function(event) { navGSContainer.removeClass('disabled'); });
	}

	$('.gallery-slider').each(function() {
		$(this).magnificPopup({
			delegate: '.css-item a',
			type: 'image',
			removalDelay: 600,
			mainClass: 'mfp-fade',
			closeMarkup: '<div title="Закрыть (Esc)" class="mfp-close">&#215;</div>',
			type: 'image',
			gallery: {
	        	enabled: true,
	        	arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
	        }
		});
	});
	/* GallerySlider: End */

	/* SVG For Everybody */
	svg4everybody();

	/* Scroll to block: Start */
	$(document).ready(function() {
		$(".main-menu li a").click(function() {
			var elementClick = $(this).attr("href")
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({
				scrollTop: destination - 115
			}, 800);
			return false;
		});
	});
	/* Scroll to block: End */

	/* Back to top button: Start */
	var navButton = $('#top-button'),
	    screenHeight = $(window).height(),
		 topShow = screenHeight, // Не показывать до (screenHeight или Number), px 
		 navSpeed = 1000; // Скорость прокрутки, мс 

	function scrollCalc() {
		var scrollOut = $(window).scrollTop();

		if ( scrollOut > topShow && ( navButton.attr('class') == '' || navButton.attr('class') == undefined ) )
			navButton.fadeIn().removeClass('down').addClass('up').attr('title', 'Наверх');
		if ( scrollOut < topShow && navButton.attr('class') == 'up' )
			navButton.fadeOut().removeClass('up down');
		if ( scrollOut > topShow && navButton.attr('class') == 'down' )
			navButton.fadeIn().removeClass('down').addClass('up');
	}

	$(window).bind('scroll', scrollCalc);
	var lastPos = 0;

	navButton.bind('click', function () {
		scrollOut = $(window).scrollTop();

		if ( navButton.attr('class') == 'up' ) {
			lastPos = scrollOut;
			$(window).unbind('scroll', scrollCalc);
			
			$('body, html').animate({
				scrollTop: 0
			}, navSpeed, function () {
				navButton.removeClass('up').addClass('down').attr('title', 'Вернуться');
				$(window).bind('scroll', scrollCalc);
			});
		}
		if ( navButton.attr('class') == 'down' ) {
			$(window).unbind('scroll', scrollCalc);
			
			$('body, html').animate({
				scrollTop: lastPos
			}, navSpeed, function () {
				navButton.removeClass('down').addClass('up').attr('title', 'Наверх');
				$(window).bind('scroll', scrollCalc);
			});
		}
	});
	/* Back to top button: End */

	/* Don't drag elements: Start */
	$('*').each(function (){
		$(this).bind('dragstart', function(e) {
			if (window.event) event.preventDefault();
				e.cancelBubble = true; return false;
			});
	});
	/* Don't drag elements: End */

	/* Hide input's placeholders onfocus: Start */
	document.body.onclick = function (e) {
		if (e.target.hasAttribute('placeholder')) {
			var ph = e.target.placeholder;
			if ( e.target.placeholder != '' ) {
				e.target.removeAttribute('placeholder');
				e.target.addEventListener('focusout', function () { this.placeholder = ph; } );
			}
		}
	};
	/* Hide input's placeholders onfocus: End */


	/*var errorTxt = 'Ошибка отправки';
	$("#sendform1").validate({
		submitHandler: function(form){
			var form = document.forms.sendform1,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send1.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform1').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});	
*/
	$("#sendform2").validate({
		submitHandler: function(form){
			var form = document.forms.sendform2,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/mail.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform2').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});	
/*
	$("#sendform3").validate({
		submitHandler: function(form){
			var form = document.forms.sendform3,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send3.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform3').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform4").validate({
		submitHandler: function(form){
			var form = document.forms.sendform4,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send4.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform4').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform5").validate({
		submitHandler: function(form){
			var form = document.forms.sendform5,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send5.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform5').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform6").validate({
		submitHandler: function(form){
			var form = document.forms.sendform6,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send6.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform6').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});*/
	
	/* Mail: End */

});

/* GoogleMap: Start */
/*var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.964734, lng: 30.3047738},
		zoom: 17,
		scrollwheel: false,
	});
	// Create a marker and set its position.
  var marker = new google.maps.Marker({
  	map: map,
  	position: {lat: 59.964734, lng: 30.3047738},
  	title: 'Россия, Санкт-Петербург, улица Бармалеева, дом 17',
  });
}*/
/* GoogleMap: End */



/* Mail: Start */
	function ThanksPopup() {
		$.magnificPopup.open({
			items: {
				src: '#popup-callback-thankyou',
			},
			type: 'inline',
			removalDelay: 600,
			mainClass: 'mfp-fade',
			closeMarkup: '<div title="Закрыть (Esc)" class="mfp-close">&#215;</div>',
		});
	}

var errorTxt = 'Ошибка отправки';
$(document).ready(function() {
	$( "#sendform1" ).submit(function( event ) {
		$("#sendform1 .phoneform1").removeClass("error");
		var phone = $("#sendform1 .phoneform1").val();
		if(phone==""){
			$("#sendform1 .phoneform1").addClass("error");
			return false;
		}else{
			$.ajax({
				type: "POST",
				url: "mail.php",
				cache: false,
				data: {
					AjaxMethod: "sendmail",
					phone:phone
				},
				success: function(d){
					document.getElementById('sendform1').reset();
					ThanksPopup();
					return false;
				}
			});
			return false;
		}
	});
	
	
	$( "#sendform3" ).submit(function( event ) {
		$("#sendform3 .phoneform1").removeClass("error");
		var phone = $("#sendform3 .phoneform1").val();
		if(phone==""){
			$("#sendform3 .phoneform1").addClass("error");
			return false;
		}else{
			$.ajax({
				type: "POST",
				url: "mail.php",
				cache: false,
				data: {
					AjaxMethod: "sendmail",
					phone:phone
				},
				success: function(d){
					document.getElementById('sendform3').reset();
					ThanksPopup();
					return false;
				}
			});
			return false;
		}
	});
	
	
	
	$( "#sendform2" ).submit(function( event ) {
		$("#sendform2 .phoneform2").removeClass("error");
		var phone = $("#sendform2 .phoneform2").val();
		if(phone==""){
			$("#sendform2 .phoneform2").addClass("error");
			return false;
		}else{
			return true;
		}
	});
});

/*
	$("#sendform1").validate({
		submitHandler: function(form){
			var form = document.forms.sendform1,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send1.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform1').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});	

	$("#sendform2").validate({
		submitHandler: function(form){
			var form = document.forms.sendform2,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform2').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});	

	$("#sendform3").validate({
		submitHandler: function(form){
			var form = document.forms.sendform3,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send3.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform3').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform4").validate({
		submitHandler: function(form){
			var form = document.forms.sendform4,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send4.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform4').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform5").validate({
		submitHandler: function(form){
			var form = document.forms.sendform5,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send5.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform5').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});
	
	$("#sendform6").validate({
		submitHandler: function(form){
			var form = document.forms.sendform6,
				 formData = new FormData(form),
				 xhr = new XMLHttpRequest();

			xhr.open("POST", "/send6.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						document.getElementById('sendform6').reset();
						ThanksPopup();
					}
				}
			};
			xhr.send(formData);
		}
	});*/