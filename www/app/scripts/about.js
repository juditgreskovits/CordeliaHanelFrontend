var studioHanel = studioHanel || {};

studioHanel.TeaserAbout = function() {

	function populate(data) {
		$("#teaser-about h1").text(data);
	}
	studioHanel.TeaserAbout.prototype.populate = populate;

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

	function populate(data) {
		var aboutData = data[0];
		$("#about h1").text(aboutData.title);
		var descriptions = studioHanel.Utils.markupLinebreaks(aboutData.description);
		descriptions = descriptions.split("<br/>").join('</p><p>');
		$('#about-copy-column div').append('<p>' + descriptions + '</p>');
		/*descriptions = descriptions.split("<br/>");
		console.log('descriptions.length = ' + descriptions.length);
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
		$('#about-second-column').append(secondDescription);*/
		
	}
	studioHanel.About.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		if(scrollTop < windowHeight*2)
		{
			var landingHeight = $('#landing').height();
			var position = 'fixed';
			var targetTop = 0;
			if(scrollTop < landingHeight ) {
				position = 'absolute';

				var targetTop = landingHeight;
				if(scrollTop < targetTop*0.33) {
					targetTop += $('#teaser-about').height();
				}
				else if(scrollTop < targetTop*0.66) {
					targetTop += $('#teaser-about').height()*(targetTop*0.66 - scrollTop)/targetTop*3;
				}
			}
			$('#about').css({display:'block', position:position, top:targetTop});
			var targetPaddingTop = $('#about-copy-column').height() - $('#about-photo-column').height();
			/*console.log('targetMarginBottom = ' + targetMarginBottom);*/
			$('#about-photo-column').css('margin-top', targetPaddingTop);
		}
		else {
			$("#about").css({display:'none'});
		}
	}
	studioHanel.About.prototype.update = update;
};