var studioHanel = studioHanel || {};

studioHanel.StudioHanel = function() {

	console.log('document.domain = ' + document.domain);

	var path = document.domain == 'studio-hanel.com' ? 
		'http://studio-hanel.com/studio-hanel/' : 'http://127.0.0.1:8000/';

	function getPath() {
		return path;
	}
	this.getPath = getPath;
	
	var landingPath = path + 'api/studiohanel/landing/?format=json';
	var menuPath = path + 'api/studiohanel/menu/?format=json';
	var aboutPath = path + 'api/studiohanel/about/?format=json';
	var interiorsPath = path + 'api/studiohanel/interior/?format=json';
	var caseStudyPath = path + 'api/studiohanel/casestudy/?format=json';
	var productDesignPath = path + 'api/studiohanel/productdesign/?format=json';
	var contactPath = path + 'api/studiohanel/contact/?format=json';

	var totalLoaded = 0;

	var landing = new studioHanel.Landing();
	var teaserAbout = new studioHanel.TeaserAbout();
	var about = new studioHanel.About();
	var teaserInteriors = new studioHanel.TeaserInteriors();
	var interiors = new studioHanel.Interiors();
	var caseStudy = new studioHanel.CaseStudy();
	var productDesign = new studioHanel.ProductDesign();
	var teaserContact = new studioHanel.TeaserContact();
	var contact = new studioHanel.Contact();

	var navigation = new studioHanel.Navigation();
	navigation.registerSection(landing);
	navigation.registerSection(teaserAbout);
	navigation.registerSection(about);
	navigation.registerSection(teaserInteriors);
	navigation.registerSection(interiors);
	navigation.registerSection(caseStudy);
	navigation.registerSection(productDesign);
	navigation.registerSection(teaserContact);
	navigation.registerSection(contact);

	var menu = new studioHanel.Menu(navigation);
	navigation.registerSection(menu);

	function checkAllLoaded() {
		totalLoaded++;
		if(totalLoaded == 6) {
			displaySections(true);
			navigation.init();
			hideSections(false);
		}
	}

	var sectionIds = ['#landing', '#teaser-about', '#about', 
		'#teaser-interiors', '#interiors', '#case-study',
		'#product-design', '#teaser-contact', '#contact'];

	function displaySections(display) {
		console.log('displaySections display = ' + display);
		var css = display ? 'block' : 'none';
		$.each(sectionIds, function(index, sectionId) {
			$(sectionId).css('display', css);
		});
	}
	
	function hideSections(hide) {
		console.log('hideSections hide = ' + hide);
		var css = hide ? 'hidden' : 'visible';
		$.each(sectionIds, function(index, sectionId) {
			$(sectionId).css('visibility', css);
		});
	}

	function updateSections(update) {
		if(update) {
			displaySections(true);
			navigation.update(true);
			hideSections(false);
		}
		else {
			hideSections(true);
			displaySections(false);
		}
	}
	this.updateSections = updateSections;
	
	$.getJSON(menuPath, function(data) { 
		menu.populate(data.objects);
		teaserAbout.populate(data.objects[0].cta);
		teaserInteriors.populate(data.objects[1].cta);
		teaserContact.populate(data.objects[4].cta);
		checkAllLoaded();
	});

	$.getJSON(aboutPath, function(data) { 
		about.populate(data.objects);
		checkAllLoaded();
	});

	$.getJSON(interiorsPath, function(data) { 
		interiors.populate(data.objects);
		checkAllLoaded();
	});

	$.getJSON(caseStudyPath, function(data) { 
		caseStudy.populate(data.objects);
		checkAllLoaded();
	});

	$.getJSON(productDesignPath, function(data) { 
		productDesign.populate(data.objects);
		checkAllLoaded();
	});

	$.getJSON(contactPath, function(data) { 
		contact.populate(data.objects);
		checkAllLoaded();
	});

	window.main = this;
};