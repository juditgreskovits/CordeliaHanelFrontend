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
	var copyrightHeight;
	var testScrollTop;
	var mScrollTop;

	$('input#send').click(function() {
		console.log('send');
		$('label#error').text('');
		var errors = [];
	    var name = $('input#name').val();
	    if (name == '') {
	    	$('input#name').focus();
	    	errors.push('name');
	    }
	    var email = $('input#email').val();
	    if (email == '') {
	    	if(!errors.length) {
	    		$('input#email').focus();
	    	}
	    	errors.push('email');
	    }
	    var message = $('input#message').val();
	    if (message == '') {
	    	if(!errors.length) {
	    		$('input#message').focus();
	    	}
	    	errors.push('message');
	    }

	    if(errors.length) {
	    	var errorText = 'Please enter your ' + errors[0];
	    	if(errors.length > 1) {
	    		errorText += errors.length > 2 ? ', ' : ' and ';
		    	errorText += errors[1];
		    	if(errors.length == 3) {
		    		errorText += ' and ' + errors[2];
		    	}
	    	}
	    	errorText += '.';
	    	$('label#error').text(errorText);
	    	return false;
	    }

		var dataString = 'name='+ name + '&sender=' + email + '&subject=' + 'Studio-Hanel Contact Form' + '&message=' + message;
		console.log(dataString);
		// return;	
		$.ajax({
			type: 'POST',
			url: main.getPath() + 'StudioHanel/contact/',
			data: dataString,
			success: function(response) {
				console.log(response);
				if(response == 'success') {
					var html = '<div id="feedback">';
					html += '<h3>Thank you for your message!</h3>'; 
					html += '<p>We will be in touch soon.</p>';
					html += '</div>';
					$('#contact-form').html(html);
				}
		  	}
		});
		return false;
	});

	function populate(data) {
		$('#phone').append('<p><strong>' + data[0].phone + '</strong></p>');
		var address = studioHanel.Utils.markupLinebreaks(data[0].address, true);
		address = address.replace('<p>', '<p><strong>');
		address = address.replace('<br/>', '</strong><br/>');
		$('#address').append(address);

		contactHeight = $('#contact').height();
		copyrightHeight = $('#copyright').height();
		$('#contact-util').height(contactHeight + copyrightHeight);
	}
	studioHanel.Contact.prototype.populate = populate;

	function update(windowHeight, scrollTop, maxScrollTop) {

		var targetTop = $('#teaser-contact').position().top + $('#teaser-contact').height();
		$('#contact-util').css('top', targetTop);
		$('#contact').css('top', windowHeight - contactHeight - copyrightHeight);
		$('#copyright').css('top', windowHeight - copyrightHeight);
	}
	studioHanel.Contact.prototype.update = update;
};