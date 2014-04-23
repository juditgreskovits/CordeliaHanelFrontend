var studioHanel = studioHanel || {};

studioHanel.TeaserContact = function() {

	 function update(windowHeight, scrollTop, maxScrollTop) {
	 	var targetTop = $("#product-design").position().top + $("#product-design").height();
	 	$("#teaser-contact").css({top:targetTop});
	}
	studioHanel.TeaserContact.prototype.update = update;
};

studioHanel.Contact = function() {
	var contactHeight = $("#contact .pattern").position().top + $("#contact .pattern").height() - $("#contact").position().top;
	var testScrollTop;
	var mScrollTop;

	function update(windowHeight, scrollTop, maxScrollTop) {
		
		var testScrollTop = $("#teaser-contact").position().top + $("#teaser-contact").height() - windowHeight;
		var targetTop = $("#teaser-contact").position().top + $("#teaser-contact").height() - contactHeight;
		var targetPaddingBottom; 
		if(scrollTop < testScrollTop) {
			targetTop = targetTop; //this is not right - like ever.
			targetPaddingBottom = contactHeight;
		} 
		else {
			var diff = scrollTop - testScrollTop;
			if(diff < contactHeight) {
				targetTop = targetTop + diff; // top to increase, 
				targetPaddingBottom = contactHeight - diff; // padding to decrease by same amount*/
			}
			else {
				targetTop = targetTop + contactHeight;
				targetPaddingBottom = 0;
			}
		} 
		// console.log("testScrollTop = " + testScrollTop + " | scrollTop = " + scrollTop + " | diff = " + diff);
		$("#contact").css({top:targetTop});
		$("#contact").css('padding-bottom', targetPaddingBottom);
	}
	studioHanel.Contact.prototype.update = update;
};