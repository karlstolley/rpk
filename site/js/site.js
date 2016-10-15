//Site JavaScript
;
var loadjQuery = function() {
  var jQ;
  if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
    jQ = document.createElement('script');
    jQ.onload = jQ.onreadystatechange = pageInit;
    // This will load the latest jQuery, 3.1.0 if not already loaded
    // Loading jQuery this way saves the trouble of loading it manually
    // in a <script> tag on every HTML page
    jQ.src = '//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
    return document.body.appendChild(jQ);
  }
  else {
    return pageInit();
  }
};

var pageInit = function() {

  jQuery.noConflict();

  (function($) {
    $('html').removeClass('nojs').addClass('hasjs');
    // Other jQuery-dependent JavaScript goes here
    jQueryBaby();

  function jQueryBaby() {
    $('h1').html('I Have teh jQuery');
  }


  })(jQuery);



};


if (window.addEventListener) {
  window.addEventListener('load', loadjQuery, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', loadjQuery);
}
