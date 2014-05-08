var studioHanel = studioHanel || {};

studioHanel.ProductDesign = function() {

	function populate(data) {
		var designData = data[0];
		var designImages = designData.productDesignImages;
		var description = studioHanel.Utils.markupLinebreaks(designData.description);
		descriptions = description.split("<br/>");
		descriptions.splice(descriptions.length - 2, 0, '<img src="' + designImages[1].image + '">');
		description = descriptions.join('</p><p>');
		var html = '<img id="bathroom-image" src="' + designImages[0].image + '">';
		html += '<div id="bathroom-description">' + description + '</div>';
		$('#product-design').append(html);
	}
	studioHanel.ProductDesign.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		$('#product-design').height(windowHeight - $('#teaser-interiors').height() - $('#teaser-contact').height());
		var targetTop = $("#case-study").position().top + $("#case-study").height();
		$("#product-design").css({top:targetTop});
	}
	studioHanel.ProductDesign.prototype.update = update;
};