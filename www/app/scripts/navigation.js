var studioHanel = studioHanel || {};

studioHanel.Navigation = function(menu, landing, teaser, about) {

	var sections = [];

	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var maxScrollTop = $(document).height() - $(window).height();

	function init() {

		update();

		$(window).resize(function() {
			windowHeight = $(window).height();

			update();
		});

		$(window).on('scroll', update);
	}
	studioHanel.Navigation.prototype.init = init;

	function scrollToPosition(targetPosition) {
		var scrollDistance = Math.abs(targetPosition - scrollTop);
		var scrollTime = 0.2 + scrollDistance*0.0002;
		TweenMax.to($(window), scrollTime, {scrollTo:{y:targetPosition, autoKill:false}, ease:Sine.easeOut, onUpdate:update, overwrite:5});
	}
	studioHanel.Navigation.prototype.scrollToPosition = scrollToPosition;

	function update(updateScrollTop) {
		
		if(updateScrollTop === true) {
			$(window).scrollTop(scrollTop);
		}
		else if ($(window).scrollTop() > 0) {
			scrollTop = $(window).scrollTop();
		}

		maxScrollTop = $(document).height() - windowHeight;

		$(document).height(1000);

		console.log('scrollTop = ' + scrollTop + ' | maxScrollTop = ' + maxScrollTop);
		console.log('$(document).height() = ' + $(document).height() + ' | $(html).height() = ' + $('html').height());

		updateSections();
	}
	studioHanel.Navigation.prototype.update = update;

	function updateSections() {
		$.each(sections, function(index, section) {
			section.update(windowHeight, scrollTop, maxScrollTop);
		});
	}

	function registerSection(section) {
		sections.push(section);
	}
	studioHanel.Navigation.prototype.registerSection = registerSection;
}