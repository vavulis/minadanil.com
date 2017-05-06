jQuery.noConflict();
jQuery(document).ready(function($){	

	//STICKY MENU...
	$(".dt-sticky-menu").sticky({ topSpacing: 0 });

	//ONE PAGE NAV...
	$('#main-menu').onePageNav({
		currentClass : 'current_page_item',
		filter		 : ':not(.external)',
		scrollSpeed  : 750,
		scrollOffset : 87,
		scrollChange : fixMagicline
	});
	
	//MINI MOBILE MENU...
    $('nav#main-menu').meanmenu({
        meanMenuContainer: $('header .menu-main-menu-container'),
        meanRevealPosition: 'left',
        meanScreenWidth: 767,
        meanMenuClose: "<span/><span/><span/>",
		onePage: true
    });
	
	//Scroll Page...	
	$('#scrolldown a').click(function(){
		   $.scrollTo('#home', 1400, { offset: { top: -147 }});
		   return false;
   });
   
   	/*To Top*/
  	$().UItoTop({ easingType: 'easeOutQuart' });
	
	//TABS...
	if($('ul.tabs-frame').length > 0) {
		$('ul.tabs-frame').tabs('> .tabs-frame-content', { effect: 'slide' });
	}
	
	if($('.team-tab ul.tabs-frame').length > 0) {
		$('ul.tabs-frame').tabs('> .tabs-frame-content', { effect: 'fade' });
	}
  
  	$('div.pic').click(function(){ 
		$.scrollTo('#team', 750);
	});
  
	//TOGGLES...
	$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
	$('.dt-sc-toggle').click(function(){ $(this).next('.dt-sc-toggle-content').slideToggle(); });
	$('.dt-sc-toggle-frame-set').each(function(){
	  var $this = $(this),
		  $toggle = $this.find('.dt-sc-toggle-accordion');
	  
	  $toggle.click(function(){
		if( jQuery(this).next().is(':hidden') ) {
		  $this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
		  $(this).toggleClass('active').next().slideDown();
		}
		return false;
	  });
	  
	  $this.find('.dt-sc-toggle-accordion:first').addClass("active");
	  $this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});
	
	//Load After Window Loads...
	$(window).load( function() {
		my_smartresize_function();
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
	
	$(window).smartresize(function(){
		my_smartresize_function();
	});

	 //funy text
	
	$('#home .sub-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
	
	$('#services .main-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
	
    $('#team .main-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
    $('#portfolio .main-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
    $('#blog .main-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
    $('#contact .main-title h2').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none'
    });
	
	$('#page-title h1').funnyText({
        speed: 500,
        color: '#F33535',
        borderColor: 'none',
		activeColor: '#ffffff'
    });
	
	//wow animation
	new WOW().init();

	if($("#testimonial-list").length) {
		$('#testimonial-list').carouFredSel({
			responsive: true,
			auto: true,
			width: 'auto',
			height: 'auto',
			prev: '.prev',
			next: '.next',
			scroll: {
				fx: "fade",
				duration: 1000,
				pauseOnHover : true,
			},
			items: {
				height: 'auto',
				visible: {
					min: 1,
					max: 1
				}
			}
		});
	}
	
	//PRETTYPHOTO...
	var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			overlay_gallery: false, 
			social_tools: false,
			deeplinking: false
		});
	}
	
	//PARALLAX SECTIONS...
	$('.parallax').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible == true) {
				if($.browser.safari) {
					$(this).parallax("50%", -0.3);
				} else {
					$(this).parallax("50%", 0.3);
				}
			} else {
				$(this).css('background-position','');
			}
		});
	});

	//Progress Bar...
	$('.dt-custom-progress').click(function(){	
		$('.dt-sc-progress').each(function(){
			var progressBar = $(this),
				progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
					 
				if (!progressBar.hasClass('animated')) {
					progressBar.addClass('animated');
					progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				}
		});		
	});

	
	$('form[name="frmnewsletter"], form[name="commentform"], form[name="frmsearch"]').each(function(){
		$(this).validate({
			errorPlacement: function(error, element) {
				$(element).parent('p').addClass('error');
			},
			
			unhighlight: function(element){
				$(element).parent('p').removeClass('error');
			}
		});
	});
	
	$('form[name="commentform"]').submit(function () {
		return false;
	});
	
	//Tooltip
	 if($(".dt-sc-tooltip-bottom").length){
		$(".dt-sc-tooltip-bottom").each(function(){	$(this).tipTip({maxWidth: "auto"}); });
	 }
	  
	 if($(".dt-sc-tooltip-top").length){
		$(".dt-sc-tooltip-top").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }
	  
	 if($(".dt-sc-tooltip-left").length){
		$(".dt-sc-tooltip-left").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	  
	 if($(".dt-sc-tooltip-right").length){
		$(".dt-sc-tooltip-right").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }
	
	//CONTACT BOX VALIDATION & MAIL SENDING....
	$('form[name="frmcontact"]').validate({
		errorPlacement: function(error, element) {
			$(element).parent('p').addClass('error');
		},
		
		unhighlight: function(element){
			$(element).parent('p').removeClass('error');
        }
	});

	jQuery(document).ready(function($) {

		$("form[name='frmcontact']").submit(function() {
			var str = $(this).serialize();

			$.ajax({
				type: "POST",
				url: "contact.php",
				data: str,
				success: function(msg) {
					if(msg == 'OK') {
						result = '<div class="notification_ok">Ваше сообщение было отправлено</div>';
						$("#fields").hide();
					} else {
						result = msg;
					}
					$('#ajax_contact_msg').html(result);
				}
			});
			return false;
		});
	});
	
	$('form[name="frmcontact"]').validate({
		rules: { 
			txtname: { required: true },
			txtemail: { required: true, email: true }
		},
		errorPlacement: function(error, element) { }
	});
	
	//Contact Map
	var $map = $('#contact_map');
	$map.gMap({
		address: 'Россия, Москва',		
		markers: [
			{ 'address' : 'Россия, Москва' }
		],
		zoom: "fit",
		scrollwheel: false
	});
	
	//Animate Number...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {

		  if(visible === true) {
			  var val = $(this).attr('data-value');
			  $(this).animateNumber({ number: val }, 2000);
		  }
	  });
	});
	
	//Image Hover Animation
	$('.dt-hover-pager li').each(function(){

		$(this).click(function () {

			$('.dt-hover-pager').find('li').removeClass('active');

			var $this = $(this);
			$('#dt-ipad-main-img').fadeOut('fast', function () {
				
				var src = $this.attr('data-image');
				$('#dt-ipad-main-img').attr({ 'src': src });
				$('#dt-ipad-main-img').fadeIn(300);
				
			});
			
			$(this).addClass('active');

		});	
	
	});
});

//CUSTOM FIX...
function fixMagicline() {
		
    var $magicLine = jQuery("#magic-line-two");
    
    var leftPos, newWidth;
	
	leftPos = jQuery(".current_page_item a").position().left;
    newWidth = jQuery(".current_page_item").width();
	
	$magicLine.stop().animate({
		left: leftPos,
		width: newWidth
	});
}

// ANIMATE CSS + JQUERY INVIEW CONFIGURATION
(function ($) {
    "use strict";
    $(".animate").each(function () {
        $(this).one('inview', function (event, visible) {
            var $delay = "";
            var $this = $(this),
                $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

            if (visible === true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            } else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
})(jQuery);

//MeanMenu Custom Scroll...
function funtoScroll(x, e) {
	"use strict";
	var str = new String(e.target);
	var pos = str.indexOf('#');
	var t = str.substr(pos);
	
	var eleclass = jQuery(e.target).prop("class");
	
	if(eleclass == "external") {
		window.location.href = e.target;	
	} else {
		jQuery.scrollTo(t, 750, { offset: { top: -44 }});
	}
	
	jQuery(x).parent('.mean-bar').next('.mean-push').remove();		
	jQuery(x).parent('.mean-bar').remove();

	jQuery('nav#main-menu').meanmenu({
		meanMenuContainer :  jQuery('header .menu-main-menu-container'),
		meanRevealPosition:  'left',
		meanScreenWidth   :  767,
        meanMenuClose : "<span/><span/><span/>",
		onePage: true
	});
	
	e.preventDefault();
}(jQuery);

//CAROUSEL...
function my_smartresize_function(){
	
	//ISOTOPE CATEGORY...
	var $container = jQuery('.dt-sc-portfolio-container');
	$ctr = jQuery('.container').width();

	jQuery('.dt-sc-sorting-container a').click(function(){ 
		jQuery('.dt-sc-sorting-container').find('a').removeClass('active-sort');
		jQuery(this).addClass('active-sort');
		
		var selector = jQuery(this).attr('data-filter');
		
		if($ctr < 710)	{
			var opt = {
				filter: selector,
				itemSelector: jQuery('.dt-sc-portfolio-container .portfolio'),
				masonry: {
					columnWidth: 0
				}			
			};
		}
		else {
			var opt = {
				filter: selector,
				layoutMode: 'perfectMasonry',
				perfectMasonry: {
					layout: 'vertical',
					liquid: true
				}
			};
		}
		$container.isotope(opt);
		return false;
	});
	
	if($ctr < 710)	{
		var opt = {
			itemSelector: jQuery('.dt-sc-portfolio-container .portfolio'),
			masonry: {
				columnWidth: 0
			}
		};
	}
	else {
		var opt = {
			layoutMode: 'perfectMasonry',
			perfectMasonry: {
				layout: 'vertical',
				liquid: true
			}
		};
	}	
	$container.isotope(opt);
	
	//PORTFOLIO CAROUSEL...
	if(jQuery(".portfolio-carousel").length) {
		var pmax = 3;
		if(jQuery('.container').width() < 710) { pmax = 1; }
		else if(jQuery('.container').width() > 710 && jQuery('.container').width() < 768) { pmax = 1; }
		
		jQuery(".portfolio-carousel").carouFredSel({
		  responsive: true,
		  auto: false,
		  width: '100%',
		  prev: jQuery('.carousel-arrows').find('.prev-arrow'),
		  next: jQuery('.carousel-arrows').find('.next-arrow'),
		  height: 'auto',
		  scroll: 1,
		  items: { width: jQuery(this).find('.column').width(), visible: { min: 1, max: pmax } }
		});
	}
}