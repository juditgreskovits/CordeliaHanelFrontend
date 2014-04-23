var studioHanel = studioHanel || {};

studioHanel.StudioHanel = function() {

	console.log('document.domain = ' + document.domain);

	var path = document.domain == 'studio-hanel.com' ? 
		'http://studio-hanel.com/studio-hanel/' : 'http://127.0.0.1:8000/';
	
	var menuPath = path + 'api/studiohanel/menu/?format=json';

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
	navigation.update();

	$.getJSON(menuPath, function(data) { 
		console.log(data);
		menu.populate(data.objects);
	});
};