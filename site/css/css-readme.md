The css/ directory is where you store all of the .css files for your website.

There are currently three CSS files in this folder.

One you do not need to edit:

_reset.css:
	CSS created by Eric Meyer and released into the public domain. It effectively removes default web
	browser CSS. Minified versions of this file are included in the other two CSS files. This version
	is only for readable reference.

And two that you will need to edit to design your site:

screen.css:
	Where you write all of the styles for screen views of your pages. It includes some base styles to
	make up for the complete loss of styling from the reset CSS. Reference the same screen.css file
	from all pages in your site.

print.css:
  Where you write styles that determine how your pages will appear when they are printed. It
  includes some sensible styles to hide things like the site navigation, but also ensures that the
  href values of hyperlinks are included when printing the page. Reference the same print.css file
  from all pages in your site.

The gfx/ subdirectory is where you store all of the images and artwork files referenced by CSS.
Images referenced by an HTML <img /> tag belong in the media/img/ directory).

