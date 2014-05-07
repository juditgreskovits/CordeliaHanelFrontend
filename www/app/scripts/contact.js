var studioHanel = studioHanel || {};

studioHanel.TeaserContact = function() {

	function populate(data) {
		$('#teaser-contact h2').text(data);
	}
	studioHanel.TeaserContact.prototype.populate = populate;

	function update(windowHeight, scrollTop, maxScrollTop) {
	 	var targetTop = $('#product-design').position().top + $('#product-design').height();
	 	$('#teaser-contact').css({top:targetTop});
	}
	studioHanel.TeaserContact.prototype.update = update;
};

studioHanel.Contact = function() {

	var contactHeight;
	var testScrollTop;
	var mScrollTop;

	function populate(data) {
		$('#phone').append('<p><strong>' + data[0].phone + '</strong></p>');
		var address = studioHanel.Utils.markupLinebreaks(data[0].address, true);
		address = address.replace('<p>', '<p><strong>');
		address = address.replace('<br/>', '</strong><br/>');
		$('#address').append(address);

		contactHeight = $('#contact').height();
		$('#contact-util').height(contactHeight);
	}
	studioHanel.Contact.prototype.populate = populate;

	function update(windowHeight, scrollTop, maxScrollTop) {

		var targetTop = $('#teaser-contact').position().top + $('#teaser-contact').height();
		$('#contact-util').css('top', targetTop);
		$('#contact').css('top', windowHeight-contactHeight);

		/*var testScrollTop = $('#teaser-contact').position().top + $('#teaser-contact').height() - windowHeight;
		var targetTop = $('#teaser-contact').position().top + $('#teaser-contact').height() - contactHeight;
		var targetPaddingBottom; 
		if(scrollTop < testScrollTop) {
			targetTop = targetTop; //this is not right - like ever.
			targetPaddingBottom = contactHeight;
		} 
		else {
			var diff = scrollTop - testScrollTop;
			if(diff < contactHeight) {
				targetTop = targetTop + diff; // top to increase, 
				targetPaddingBottom = contactHeight - diff; // padding to decrease by same amount
			}
			else {
				targetTop = targetTop + contactHeight;
				targetPaddingBottom = 0;
			}
		} 
		$('#contact').css({top:targetTop});
		$('#contact').css('padding-bottom', targetPaddingBottom);*/
	}
	studioHanel.Contact.prototype.update = update;
};