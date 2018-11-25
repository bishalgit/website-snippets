(function ($) {
	$(document).ready(function () {
	//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.clients").owlCarousel({
				items: 8,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,5],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
		};
		$(".chat_btn").click(function(){
			$(".o_chat_window").animate({
			  width: "toggle"
			});
		  });
		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
			var scroll = $(window).scrollTop();
			$('.o_blog_cover_image').css({
				width: (100 + scroll/100) + "%"
			})
		});

		$(".scrollToTop").click(function () {
			$("body,html").animate({ scrollTop: 0 }, 800);
		});
		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length > 0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function () {
				var $this = $(this),
					animationEffect = $this.attr("data-animation-effect");
				if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function () {
						setTimeout(function () {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, { accX: 0, accY: -130 });
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length > 0 || $('.masonry-grid').length > 0 || $('.masonry-grid-fitrows').length > 0) {
			$(window).load(function () {
				$('.masonry-grid').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'masonry'
				});
				$('.masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on('click', 'ul.nav li a', function () {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		// Basic FitVids Test
        $(".video_wrapper").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $(".video_wrapper").fitVids({ customSelector: "iframe[src^='http://youtube.com']"});
        $(function () {
			var b = "slideInDown";
			var c;
			var a;
			d($("#mytab a"), $("#tab-content"));

			function d(e, f, g) {
				e.click(function (i) {
					i.preventDefault();
					$(this).tab("show");
					var h = $(this).data("easein");
					if (c) {
						c.removeClass(a);
					}
					if (h) {
						f.find("div.active").addClass("animated " + h);
						a = h;
					} else {
						if (g) {
							f.find("div.active").addClass("animated " + g);
							a = g;
						} else {
							f.find("div.active").addClass("animated " + b);
							a = b;
						}
					}
					c = f.find("div.active");
				});
			}
			$("a[rel=popover]").popover().click(function (f) {
				f.preventDefault();
				if ($(this).data("easein") != undefined) {
					$(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
				} else {
					$(this).next().addClass("animated " + b);
				}
			});
		});
		AOS.init();
	}); // End document ready
})(this.jQuery);
