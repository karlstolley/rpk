//Site JavaScript

/*Add the hasjs class inside of a domready event*/
window.addEvent('domready', function() {
	//Add a hasjs class to the body
	$$('body')[0].addClass('hasjs');
	var size = window.getSize();
	if(size.x>1100) { $$('body').addClass('widescreen'); }
});

/*Attach the widescreen class to a new resize event*/
window.addEvent('resize', function() {
var size = window.getSize();
if(size.x>1100) { $$('body').addClass('widescreen'); }
	//If the window is smaller than 1100, remove the widescreen class
	else { $$('body').removeClass('widescreen'); }
});
