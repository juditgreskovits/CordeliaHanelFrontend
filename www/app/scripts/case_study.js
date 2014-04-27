var studioHanel = studioHanel || {};

studioHanel.CaseStudy = function() {

	function populate(data) {
		var bulletsData = data[0].caseStudyBullets;
		$.each(bulletsData, function(index, stage) {
			var selectorIndex = index + 1;
			var selector = '#case-study .container-fluid .row #cell' + selectorIndex;
			$(selector).append('<img src="../' + stage.image + '">');
			var caption = stage.caption;
			caption = '<h3><span style="color:#806854">' + caption.substring(0,1) + 
				'</span><span style="color:#a8baa9">' + caption.substring(1,2) + '</span>' + caption.substring(2) + '</h3>'
			$(selector).append(caption);
			var paragraph = studioHanel.Utils.markupLinebreaks(stage.paragraph, true);
			$(selector).append(paragraph);
			console.log('stage.image = ' + stage.image);
		});

	}
	studioHanel.CaseStudy.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		/*var targetHeight = windowHeight - $('#teaser-interiors').height();
		$('.col-md-6').height(targetHeight/3);*/

		var targetTop = $("#interiors").position().top + $("#interiors").height();
		$("#case-study").css({top:targetTop});
	}
	studioHanel.CaseStudy.prototype.update = update;
};