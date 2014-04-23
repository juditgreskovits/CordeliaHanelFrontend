var studioHanel = studioHanel || {};

studioHanel.Menu = function(navigation) {

	var navigation = navigation;

	var windowHeight = 0;
	var scrollTops = [0];
	var previousIndex = currentIndex = 0;

	function populate(menuList) {
		$.each(menuList, function(index, menuData) {
			var menuIndex = index + 1;
			$('#menu').append('<li><a href="#" id="' + menuIndex + '">' + menuData.label + '</a></li>');
		});
		$('#menu li a').on('click', function(evt) {
			evt.preventDefault();
			scrollToSection(this.id);
		});
		$('#logo').on('click', function(evt) {
			scrollToSection(0);
		});
	}
	studioHanel.Menu.prototype.populate = populate;

	function update(windowHeight, scrollTop, maxScrollTop) {

		calculateScrollTops(windowHeight);

		if(scrollTop > scrollTops[currentIndex] - windowHeight*0.1) {
			if(scrollTop < scrollTops[currentIndex + 1] - windowHeight*0.1 ||
				currentIndex == scrollTops.length-1) {
				highlight();
			}
			else if (currentIndex < scrollTops.length){
				currentIndex++;
				update(windowHeight, scrollTop, maxScrollTop);
			}
		}
		else if(scrollTop < scrollTops[currentIndex] - windowHeight*0.1) {
			if(currentIndex > 0) {
				currentIndex--;
				update(windowHeight, scrollTop, maxScrollTop);
			}
		}
	}
	studioHanel.Menu.prototype.update = update;

	function calculateScrollTops(wh) {
		if(windowHeight != wh) {
			windowHeight = wh;
			scrollTops[1] = $('#landing').height();
			scrollTops[2] = scrollTops[1] + $('#about').height();
			scrollTops[3] = scrollTops[2] + $('#interiors').height();
			scrollTops[4] = scrollTops[3] + $('#case-study').height();
			scrollTops[5] = scrollTops[4] + $('#contact').height();
		}
	}

	function highlight() {
		console.log('highlight currentIndex = ' + currentIndex);
		if(previousIndex != currentIndex) {
			$('#menu li #' + previousIndex).removeClass('selected');
			$('#menu li #' + currentIndex).addClass('selected');
			previousIndex = currentIndex;
		}
	}

	function scrollToSection(index) {
		currentIndex = index;
		var targetScrollTop = scrollTops[currentIndex];
		navigation.scrollToPosition(targetScrollTop);
	}
};