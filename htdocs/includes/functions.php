<?php
/*
  The header function outputs everything from the DOCTYPE declaration
  through the end of <div id="header">.
  
  Edit the following lines to customize the function your site:
  --Site Name on line 25
  --image_src link on line 39
  --Site Favicon/Icon URLS on lines 46 and 50
  --Site URL in the <a> tag on line 74
  --Site Tagline on line 77
  
  Remember to escape any single quotes with a slash, \'
  
  As with the plain XHTML version of the RPK, remove the XHTML comment markers (<!--, -->)
  to enable certain optional features.
*/
function rpk_header($rpkpage) {
echo '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" id="example-com">

<head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Page Title: Site Name</title>

  <link rel="stylesheet" type="text/css" media="screen, print" href="/css/reset.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="/css/screen.css" />
  <!--[if lte IE 7>
  <link rel="stylesheet" type="text/css" media="screen" href="/css/screen-ie.css" />
  <![endif]-->
  <link rel="stylesheet" type="text/css" media="print" href="/css/print.css" />

<!--REMOVE COMMENT TAGS TO USE FACEBOOK SHARE METADATA:-->

<!--
  <meta name="title" content="Match this with the content of the title tag above." /> 
  <meta name="description" content="A short description of this page." />
  <link rel="image_src" href="http://example.com/media/share/thumbnail.jpg" />
-->

<!--REMOVE COMMENT TAGS TO USE FAVICON LINKS:-->

  <!--For most browsers:-->
<!--
  <link rel="icon" href="http://example.com/favicon.png" type="image/png" />
-->
  <!--For Internet Explorer:-->
<!--
  <link rel="shortcut icon" href="http://example.com/favicon.ico" />
-->

  <!--Load the jQuery library-->
  <script type="text/javascript" src="/js/jquery/jquery.js"></script>
  <!--Load site-wide JavaScript-->
  <script type="text/javascript" src="/js/site.js"></script>
  <!--Load SWFObject for working with Flash media; uncomment to load.-->
<!--
  <script type="text/javascript" src="/js/swfobject/swfobject.js"></script>
-->
  <!--Page-specific JavaScript, e.g., for use with SWFObject-->
  <script type="text/javascript">
  /*Page-specific JavaScript*/
  </script>

</head>

<body>

<div id="page">

  <div id="header">

    <h1><a href="http://example.com/" rel="home">Site Name</a></h1>

    <p class="tagline">
      Site Tagline
    </p>

    <ul class="accessibility">
      <li><a href="#navigation">Jump to Navigation</a></li>
      <li><a href="#content">Jump to Content</a></li>
    </ul>

  </div>';
}

/*
  Navigation function outputs your navigation; modify it as you would your navigation
  in the basic XHTML version; remember to escape any single quotes with a slash, \'
*/
function rpk_navigation() {
echo '  <ul id="navigation">
    <li><a href="/">Home</a></li>
    <li><a href="/about.htm">About</a></li>
  </ul>
';
}

/*
  Footer function outputs everything from <div id="footer"> through the closing tag on 
  <div id="page"> (which opens in the header function) and the closing </body>
  and </html> tags.
  
  Edit line 110 to display the site credits as you would like them on your site; remember
  to escape any single quotes with a slash, \'
*/

function rpk_footer() {
echo'  <div id="footer">
    <p class="credits">
      Site information, credits, license.
    </p>
    <ul class="validators">
      <li><a href="http://validator.w3.org/check?uri=referer"
        title="Validate this page\'s XHTML">XHTML</a></li>
      <li><a href="http://jigsaw.w3.org/css-validator/check/referer"
        title="Validate this page\'s CSS">CSS</a></li>
    </ul>
  </div>

</div>

</body>

</html>';
}