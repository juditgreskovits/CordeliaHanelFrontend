var studioHanel = studioHanel || {};

studioHanel.TeaserInteriors = function() {

	var arrowHeight = $('#teaser-interiors .arrow').height();

	function populate(data) {
		$("#teaser-interiors h2").text(data);
	}
	studioHanel.TeaserInteriors.prototype.populate = populate;

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

	var interiorLength; 

	function populate(data) {
		interiorLength = data.length;
		var rows = '';
		var i = 0, l = Math.ceil(interiorLength/2)*2;
		for(; i<l; i++) {
			if(i%2 == 0) rows += '<div class="row">';
			rows += '<div id="interior-' + i + '" class="col-md-6">';
			rows += '<div class="overlay-background"></div>'; // id="interior-overlay-' + i + '" 
			rows += '</div>';
			if(i%2 == 1) rows += '</div>';
		}
		$('#interiors .container-fluid').append(rows);

		$.each(data, function(index, interior) {
			var selector = '#interior-' + index;
			var overlay = '<div class="overlay">';
			overlay += '<h1>' + interior.title + '</h1>';
			overlay += '<h3>' + interior.location + '</h3>';
			overlay += '<p>' + interior.caption + '</p>';
			overlay += '</div>';
			$(selector).append(overlay);
			$(selector).css('background-image', 'url(../' + interior.interiorImages[0].image + ')');
			$(selector).mouseover(function() {
				$(this).find('.overlay').css('visibility', 'visible');
				TweenMax.to($(this).find('.overlay-background'), 0.6, {autoAlpha:1.0, ease:Sine.easeOut});
			});
			$(selector).mouseout(function() {
				$(this).find('.overlay').css('visibility', 'hidden');
				TweenMax.to($(this).find('.overlay-background'), 0.3, {autoAlpha:0.0, ease:Sine.easeIn});
			});
		});

		updateImages();
	}
	studioHanel.Interiors.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		var rowHeight = (windowHeight - $('#teaser-interiors').height())/2;
		$('#interiors .container-fluid .row .col-md-6').height(rowHeight);
		
		updateImages();

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

	function updateImages() {
		/*var i = 0;
		while(i < interiorLength) {
			var selector = '#interior-' + i;
			var backgroundSize = $(window).width() + 'px auto';
			$(selector).css({'background-size':backgroundSize});
			i++;
		}*/
	}
};