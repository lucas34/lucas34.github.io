window.page = window.location.hash || "#about";

$(document).ready(function() {
	if (window.page != "#about") {
		$(".menu").find("li[data-target=" + window.page + "]").trigger("click");
	}
});

$(window).on("resize", function() {
	$("html, body").height($(window).height());
	$(".main, .menu").height($(window).height() - $(".header-panel").outerHeight());
	$(".pages").height($(window).height());
}).trigger("resize");

$(".menu li").click(function() {
	// Menu
	if (!$(this).data("target")) return;
	if ($(this).is(".active")) return;
	$(".menu li").not($(this)).removeClass("active");
	$(".page").not(page).removeClass("active").hide();
	window.page = $(this).data("target");
	var page = $(window.page);
	window.location.hash = window.page;
	$(this).addClass("active");


	page.show();

	var totop = setInterval(function() {
		$(".pages").animate({scrollTop:0}, 0);
	}, 1);

	setTimeout(function() {
		page.addClass("active");
		setTimeout(function() {
			clearInterval(totop);
		}, 1000);
	}, 100);
});

