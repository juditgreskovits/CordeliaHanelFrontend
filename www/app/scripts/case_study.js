var studioHanel = studioHanel || {};

studioHanel.CaseStudy = function() {
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		var targetHeight = windowHeight - $('#teaser-interiors').height();
		$('.col-md-6').height(targetHeight/3);

		var targetTop = $("#interiors").position().top + $("#interiors").height();
		$("#case-study").css({top:targetTop});
	}
	studioHanel.CaseStudy.prototype.update = update;
};