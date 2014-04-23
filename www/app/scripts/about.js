var studioHanel = studioHanel || {};

studioHanel.TeaserAbout = function() {

	 function update(windowHeight, scrollTop, maxScrollTop) {
	 	if(scrollTop < windowHeight)
	 	{
		 	var targetTop = windowHeight - $('#teaser-about').height();
		 	$("#teaser-about").css({top:targetTop});
		 	$('#teaser-about .arrow').css('opacity', (windowHeight*0.33 - scrollTop)/windowHeight*6);
			$('#teaser-about h1').css('opacity', (windowHeight*0.5 - scrollTop)/windowHeight*6);
		}
	}
	studioHanel.TeaserAbout.prototype.update = update;
};

studioHanel.About = function() {
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		if(scrollTop < windowHeight*2)
		{
			var targetTop = $('#landing').height();
			if(scrollTop > targetTop) {
				targetTop = scrollTop;
			}
			if(scrollTop < targetTop*0.33) {
				targetTop = targetTop + $('#teaser-about').height();
			}
			else if(scrollTop < targetTop*0.66) {
				targetTop = targetTop + $('#teaser-about').height()*(targetTop*0.66 - scrollTop)/targetTop*3;
			}
			$("#about").css({top:targetTop});
		}
	}
	studioHanel.About.prototype.update = update;
};