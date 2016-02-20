The css/ folder is where you store all of the .css files for your website.

There are currently four CSS files in this folder; one you probably do not need to edit:

--reset.css:
	CSS created by Yahoo! that effectively removes default web browser CSS

And three that you will need to edit to design your site:

--screen.css:
	Where you write all of the styles for screen views of your pages (includes some base styles to
	make up for the complete loss of styling from reset.css; also has a bunch of relationship
	selectors that match basic structures in the RPK)

--screen-ie.css: 
	A conditional CSS file where you write any style fixes, if necessary, for Internet Explorer 7 or
	earlier. 
	
--print.css
	Where you write styles that determine how your pages will appear when they are printed.

Any additional CSS files that you add (such as an iphone.css file for iPhones) should also appear in
the css folder.

The gfx/ sub-folder is where you should save all of your design images for your site (see gfx/gfx-readme.txt).

