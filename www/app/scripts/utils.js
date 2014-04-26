var studioHanel = studioHanel || {};

studioHanel.Utils = function() {};

studioHanel.Utils.markupLinebreaks = function(str, wrap, markup) {
	
	if(markup == undefined) markup = '<br/>';

	str = str.replace(/\n/g, markup);
	if(wrap) str = '<p>' + str + '</p>';
	return str;
};