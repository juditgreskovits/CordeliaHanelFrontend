var studioHanel = studioHanel || {};

studioHanel.Landing = function() {

	function update(windowHeight, scrollTop, maxScrollTop) {
		$('#landing').height(windowHeight - $('#teaser-about').height());
		if(scrollTop < windowHeight) {
			var targetTop = Math.round(scrollTop/3);
			$('#landing').css('background-position-y', -targetTop + 'px');
		}
	}
	studioHanel.Landing.prototype.update = update;
};