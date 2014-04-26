var studioHanel = studioHanel || {};

studioHanel.Navigation = function(menu, landing, teaser, about) {

	var sections = [];

	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var maxScrollTop = $(document).height() - $(window).height();

	function init() {

		$(window).resize(function() {
			windowHeight = $(window).height();

			update();
		});

		$(window).on('scroll', update);
	}
	studioHanel.Navigation.prototype.init = init;

	function scrollToPosition(targetPosition) {
		var scrollDistance = Math.abs(targetPosition - scrollTop);
		var scrollTime = 0.33 + scrollDistance*0.00033;
		console.log('scrollTime = ' + scrollTime);
		TweenMax.to($(window), scrollTime, {scrollTo:{y:targetPosition, autoKill:true}, ease:Sine.easeOut, onUpdate:update, overwrite:5});
	}
	studioHanel.Navigation.prototype.scrollToPosition = scrollToPosition;

	function update() {
		
		scrollTop = $(window).scrollTop();
		maxScrollTop = $(document).height() - $(window).height();

		$.each(sections, function(index, section) {
			section.update(windowHeight, scrollTop, maxScrollTop);
		});
	}
	studioHanel.Navigation.prototype.update = update;

	function registerSection(section) {
		sections.push(section);
	}
	studioHanel.Navigation.prototype.registerSection = registerSection;
}