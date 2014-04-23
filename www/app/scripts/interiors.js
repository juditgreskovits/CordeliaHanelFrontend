var studioHanel = studioHanel || {};

studioHanel.TeaserInteriors = function() {

	var arrowHeight = $('#teaser-interiors .arrow').height();

	function update(windowHeight, scrollTop, maxScrollTop) {
	 	var landingHeight = $('#landing').height();
	 	var aboutHeight = $("#about").height();
	 	var targetTop;
	 	var ratio;
	 	if(scrollTop < landingHeight) {
	 		targetTop =  $("#about").position().top + aboutHeight;
	 		ratio = 1;
	 	}
	 	else if(scrollTop > landingHeight + aboutHeight) {
	 		targetTop = scrollTop;
	 		ratio = 0;
	 	}
	 	else {
	 		targetTop = landingHeight + aboutHeight;
	 		// fading to happen here
	 		ratio = (landingHeight + aboutHeight*0.66 - scrollTop)/aboutHeight*3;
	 		if(ratio > 1) ratio = 1;
	 	}
	 	$("#teaser-interiors").css({top:targetTop});
	 	$('#teaser-interiors .pattern').css('opacity', ratio);
	 	$('#teaser-interiors h2').css('opacity', ratio);
	 	$('#teaser-interiors .arrow').height(arrowHeight*ratio);
	 	$('#teaser-interiors .arrow').css('background-position-y', $('#teaser-interiors .arrow').height()-20);
	}
	studioHanel.TeaserInteriors.prototype.update = update;
};

studioHanel.Interiors = function() {
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		$('#interiors').height(windowHeight - $('#teaser-interiors').height());
		var landingHeight = $('#landing').height();
		var aboutHeight = $("#about").height();
		var teaserInteriorsHeight = $("#teaser-interiors").height();
		var targetTop;
		if(scrollTop < landingHeight + aboutHeight) {
	 		targetTop = $("#teaser-interiors").position().top + teaserInteriorsHeight;
	 	}
	 	else {
	 		targetTop = landingHeight + aboutHeight + teaserInteriorsHeight;
	 	}
	 	$("#interiors").css({top:targetTop});
	}
	studioHanel.Interiors.prototype.update = update;
};