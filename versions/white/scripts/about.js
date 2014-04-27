var studioHanel = studioHanel || {};

studioHanel.TeaserAbout = function() {

	function populate(data) {
		$("#teaser-about h1").text(data);
	}
	studioHanel.TeaserAbout.prototype.populate = populate;

	function update(windowHeight, scrollTop, maxScrollTop) {
	 	if(scrollTop < windowHeight*2)
	 	{
		 	/*var targetTop = windowHeight - $('#teaser-about').height();
		 	$("#teaser-about").css({top:targetTop});*/
		 	var targetTop = $('#landing').height();
			if(scrollTop > targetTop) {
				targetTop = scrollTop;
			}
			$("#teaser-about").css({top:targetTop});
		 	$('#teaser-about .arrow').css('opacity', (windowHeight*0.33 - scrollTop)/windowHeight*6);
			$('#teaser-about h1').css('opacity', (windowHeight*0.5 - scrollTop)/windowHeight*6);
			// TODO need to tween the height...
			// TODO need to apply color transition
		}
	}
	studioHanel.TeaserAbout.prototype.update = update;
};

studioHanel.About = function() {

	function populate(data) {
		var aboutData = data[0];
		$("#about h1").text(aboutData.title);
		var descriptions = studioHanel.Utils.markupLinebreaks(aboutData.description);
		descriptions = descriptions.split("<br/>");
		var firstDescription = "";
		var secondDescription = "";
		var description;
		var i = 0, l = descriptions.length, h = Math.ceil(l/2);
		while(i < l)
		{
			description = '<p>' + descriptions[i] + '</p>';
			if(i++ < h) {
				firstDescription += description;
			}
			else {
				secondDescription += description;
			}
			
		}
		$('#about-first-column').append(firstDescription);
		$('#about-second-column').append(secondDescription);
		/*if($('#about-first-column').height() > $('#about-second-column').height()) {
			var paddingTop = ($('#about-first-column').height() - $('#about-second-column').height())/2;
			console.log('paddingTop = ' + paddingTop);
			$('#about-second-column').css('padding-top', paddingTop);
		}*/
		
	}
	studioHanel.About.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		if(scrollTop < windowHeight*2)
		{
			/*var targetTop = $('#landing').height();
			if(scrollTop > targetTop) {
				targetTop = scrollTop;
			}
			if(scrollTop < targetTop*0.33) {
				targetTop = targetTop + $('#teaser-about').height();
			}
			else if(scrollTop < targetTop*0.66) {
				targetTop = targetTop + $('#teaser-about').height()*(targetTop*0.66 - scrollTop)/targetTop*3;
			}*/
			var targetTop = $('#landing').height() + $('#teaser-about').height();
			if(scrollTop > $('#landing').height()) {
				targetTop = scrollTop + $('#teaser-about').height();
			}
			$("#about").css({top:targetTop});
		}
	}
	studioHanel.About.prototype.update = update;
};