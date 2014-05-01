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
			$(selector).mouseenter(function() {
				$(this).find('.overlay').css('visibility', 'visible');
				TweenMax.to($(this).find('.overlay-background'), 0.6, {autoAlpha:1.0, ease:Sine.easeOut});
			});
			$(selector).mouseleave(function() {
				$(this).find('.overlay').css('visibility', 'hidden');
				TweenMax.to($(this).find('.overlay-background'), 0.3, {autoAlpha:0.0, ease:Sine.easeIn});
			});
			$(selector).click(function() {
				var index = this.id.substr(-1);
				studioHanel.Gallery(index);
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

studioHanel.Gallery = function(interiorIndex) {

	// TODO add image preloading for button hovers

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	var title, location, caption;
	var images = [];

	interiorIndex = Number(interiorIndex) + 1;
	var galleryPath = main.getPath() + 'api/studiohanel/interior/' + interiorIndex + '?format=json';

	var galleryIndex = 0;
	var fadeInDuration = 0.6;
	var fadeOutDuration = 0.8;
	var transitionDuration = 0.6;
	var activeAlpha = 1.0;
	var activeOutAlpha = 0.5;
	var inactiveAlpha = 0.33;
	var inactiveOverAlpha = 0.9;

	$.getJSON(galleryPath, function(data) { 
		title = data.title;
		location = data.location;
		caption = data.caption;
		addGallery();
		loadImages(data.interiorImages);
		updateNextPrevButtons();
	});

	$(window).resize(function() {
		windowWidth = $(window).width();
		windowHeight = $(window).height();

		resizeGallery();
		resizeAndRepositionImages();
	});

	function addGallery() {
		console.log('addGallery');
		var gallery = '<div id="gallery" class="gallery">';
		gallery += '<div id="images"></div>';
		gallery += '<button id="close-button">';
		gallery += '<button id="prev-button">';
		gallery += '<button id="next-button">';
		gallery += '</div>';
		$('body').append(gallery);

		$('div#gallery #close-button').click(removeGallery);

		$('div#gallery #prev-button').mouseenter(prevOver);
		$('div#gallery #prev-button').mouseleave(prevOut);
		$('div#gallery #prev-button').click(prevClick);

		$('div#gallery #next-button').mouseenter(nextOver);
		$('div#gallery #next-button').mouseleave(nextOut);
		$('div#gallery #next-button').click(nextClick);

		resizeGallery();
		main.updateSections(false);
	}

	function removeGallery() {
		main.updateSections(true);
		$('div#gallery').remove();
	}

	function resizeGallery() {
		$('#gallery').width(windowWidth);
		$('#gallery').height(windowHeight);
	}

	function prevOver() {
		prevNextOverOut(-1, true);
	}

	function prevOut() {
		prevNextOverOut(-1, false);
	}

	function prevClick() {
		prevNextClick(-1);
	}

	function nextOver() {
		prevNextOverOut(1, true);
	}

	function nextOut() {
		prevNextOverOut(1, false);
	}

	function nextClick() {
		console.log('nextClick galleryIndex = ' + galleryIndex);
		prevNextClick(1);
	}

	function prevNextOverOut(next, over) {
		var image = images[galleryIndex];
		if (image.width < windowWidth*0.9) {
			prevNextFade(next, over);
		}
	}

	function prevNextFade(next, over) {
		var targetIndex = galleryIndex + next;
		if(targetIndex >= 0 && targetIndex <= images.length-1) {
			var selector = '#image-' + galleryIndex;
			var targetSelector = '#image-' + targetIndex;
			if(over) {
				TweenMax.to($(selector), fadeOutDuration, {autoAlpha:activeOutAlpha, ease:Sine.easeOut});
				TweenMax.to($(targetSelector), fadeInDuration, {autoAlpha:inactiveOverAlpha, ease:Sine.easeOut});
			}
			else {
				TweenMax.to($(selector), fadeInDuration, {autoAlpha:activeAlpha, ease:Sine.easeOut});
				TweenMax.to($(targetSelector), fadeOutDuration, {autoAlpha:inactiveAlpha, ease:Sine.easeOut});
			}
		}
	}

	function prevNextClick(next) {
		var targetIndex = galleryIndex + next;
		if(targetIndex >= 0 && targetIndex <= images.length-1) {
			galleryIndex = targetIndex;
			var image = images[galleryIndex];
			var targetLeft = -image.left;
			if(galleryIndex == images.length - 1) {
				targetLeft += windowWidth - image.width;
			}
			else if(galleryIndex > 0) {
				targetLeft += (windowWidth - image.width)/2;
			}
			TweenMax.to($('#images'), transitionDuration, {css:{left:targetLeft}, ease:Sine.easeOut});
			prevNextFade(next*(-1), false);
			updateNextPrevButtons();
		}
	}

	function updateNextPrevButtons() {
		var prevButtonVisibility = galleryIndex > 0 ? 'visible' : 'hidden';
		var nextButtonVisibility = galleryIndex < images.length-1 ? 'visible' : 'hidden';
		$('#prev-button').css('visibility', prevButtonVisibility);
		$('#next-button').css('visibility', nextButtonVisibility);
	}

	function loadImages(interiorImages) {
		$.each(interiorImages, function(index, imageData) {
			var image = new Image();
			image.index = index;
			image.path = imageData.image;
			images.push(image);
		});
		loadImage(0);
	}

	function loadImage(imageIndex) {
		var image = images[imageIndex];
		image.onload = function() {
			this.loaded = true;
			this.ratio = this.width/this.height;
			resizeAndRepositionImage(imageIndex);
			var nextImageIndex = imageIndex + 1;
			if(nextImageIndex < images.length) loadImage(nextImageIndex);
		};
		image.src = image.path;
	}

	function resizeAndRepositionImages() {
		$.each(images, function(index, image) {
			resizeAndRepositionImage(index);
		});
	}

	function resizeAndRepositionImage(imageIndex) {
		var image = images[imageIndex];
		image.height = windowHeight;
		image.width = image.ratio*windowHeight;
		if(imageIndex > 0) {
			var previousImage = images[imageIndex - 1];
			image.left = previousImage.right;
		}
		else {
			image.left = 0;
		}
		image.right = image.left +  image.width;
		updateImageDisplay(imageIndex);
	}

	function updateImageDisplay(imageIndex) {
		var image = images[imageIndex];
		var imageId = 'image-' + imageIndex;
		var selector = '#' + imageId;
		var htmlExists = Boolean($(selector).length);
		console.log('htmlExists = ' + htmlExists);
		//if(image.left < windowWidth) {
			var imageClass = imageIndex == galleryIndex ? 'active' : 'inactive';
			if(!htmlExists) {
				$('#images').append('<img id="' + imageId + '" src="' + image.src + '">');
				var targetAlpha = imageIndex == galleryIndex ? 1.0 : 0.33;
				TweenMax.to($(selector), 1.2, {autoAlpha:targetAlpha, ease:Sine.easeOut});
			}
			$(selector).attr('class', imageClass);
			$(selector).css('width', image.width);
			$(selector).css('height', image.height);
			$(selector).css('left', image.left);
			$(selector).css('display', 'block');
		/*}
		else if(htmlExists){
			$(selector).css('display', 'none');
		}*/
	}
};