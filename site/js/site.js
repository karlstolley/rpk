// Site JavaScript
function customJavaScript($) {
  $("h1").html("This Should Work, In Theory");
}
(function() {
  var jQueryURL = "//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
  // This will load the latest jQuery, 3.2.1, if not already loaded.
  // See https://developers.google.com/speed/libraries/#jquery for
  // a list of all versions of jQuery available from Google Hosted
  // Libraries.
  //
  // Loading jQuery this way avoids the trouble of loading it manually
  // in a <script> tag on every HTML page, and makes it easier in the
  // future for you to replace jQuery with a different library or
  // write purely in native JavaScript.
  var loadjQuery, pageInit;

  loadjQuery = function() {
    var jQ;
    if (window.jQuery) {
      return pageInit();
    }
    else {
      jQ = document.createElement("script");
      jQ.src = jQueryURL;
      jQ.onload = jQ.onreadystatechange = pageInit;
      return document.body.appendChild(jQ);
    }
  };

  pageInit = function() {

    jQuery.noConflict();

    jQuery(
      function($) {
        $("html").removeClass("nojs").addClass("hasjs");
        // Write other jQuery-dependent JavaScript here:
        customJavaScript($);
      }
    );

  };

  if (window.addEventListener) {
    window.addEventListener("load", loadjQuery, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", loadjQuery);
  }

})();

/*
var rpk = {
  jQueryURL: '',
  loadjQuery: function() {
  },
  initialize: function () {
  }
  load: function() {
    if (window.addEventListener) {
      window.addEventListener("load", loadjQuery, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", loadjQuery);
    }
  }
};

rpk.pageLoad();
*/
