jQuery(document).ready(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){ 
		    $('body').addClass("scroll");
		    $('body').removeClass("no-scroll");
		    //$('#wpadminbar').addClass("sticky");
		}
		else{
			$('body').addClass("no-scroll");
			$('body').removeClass("scroll");
			//$('#wpadminbar').removeClass("sticky");
		}
	});
})