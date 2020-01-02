jQuery(document).ready(function(){
 //sticky menu(waypoints)

	$('.service-javascript').waypoint('sticky');


//portfolios filtering item(javascript)
	$(".filter-item li").on('click',function(){
		$(".filter-item li").removeClass("active");
		$(this).addClass("active");

		var selector= $(this).attr("data-filter");
		$(".portfolio-lists").isotope({
			filter:selector,
		})
	})
 //offcanvas menu item (javascript)
	$(".menu-trigger").on("click",function(){
		$(".offcanvas-menu").addClass("active");
		$(".offcanvas-overlay").addClass("overlay");
	});

	$(".closebtn,.offcanvas-overlay").on("click",function(){
		$(".offcanvas-menu").removeClass("active");
		$(".offcanvas-overlay").removeClass("overlay");
	})

	
})