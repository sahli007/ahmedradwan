(function(){

	var unclicked = true;
	var homeSection = $('#home-section');
	var navIcon = $('#nav-icon2');
	$('#control, .menu-link, .menu-close').on("click",function() {
		if (unclicked) {
		// $('#menu').css("-webkit-transform","translateX(100%)");
		$('#menu').css('display','initial');
		homeSection.toggleClass("menu-clicked").toggleClass("menu-not-clicked");
		disable_scroll();
		navIcon.addClass("open");
		unclicked = false;
	} else {
		homeSection.toggleClass("menu-clicked").toggleClass("menu-not-clicked");
		enable_scroll();
		navIcon.removeClass("open");
		unclicked = true;
	}
});

})();