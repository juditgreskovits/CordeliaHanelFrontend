var studioHanel = studioHanel || {};

studioHanel.ProductDesign = function() {

	function populate(data) {

	}
	studioHanel.ProductDesign.prototype.populate = populate;
	
	function update(windowHeight, scrollTop, maxScrollTop) {
		$('#product-design').height(windowHeight - $('#teaser-interiors').height() - $('#teaser-contact').height());
		var targetTop = $("#case-study").position().top + $("#case-study").height();
		$("#product-design").css({top:targetTop});
	}
	studioHanel.ProductDesign.prototype.update = update;
};