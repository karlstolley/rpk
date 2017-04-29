// Site JavaScript
var rpk;

function customJavaScript($) {
  // Remove the RPK's `nojs` class on <html> and replace it with `hasjs`,
  // which provides a hook in CSS for styling JavaScript-dependent styles
  // (see the `css/screen.css` file):
  $("html").removeClass("nojs").addClass("hasjs");

  // Write other jQuery-dependent JavaScript here. It will be
  // loaded automatically inside a jQuery ready-event below:




  // End of custom JavaScript and the customJavaScript function
}

// This establishes the rpk object that sets the jQuery path and version,
// adds it to each page that calls this file (`js/site.js`), and sets up
// the page to load the custom JavaScript above:

rpk = (function() {
  // Set the URL/path and version of jQuery to use:
  var jQueryURL = "//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
  // That will load the latest jQuery, 3.2.1, if not already loaded.
  // See https://developers.google.com/speed/libraries/#jquery for
  // a list of all versions of jQuery available from Google Hosted
  // Libraries.

  // Loading jQuery using the method below avoids the trouble of
  // writing a <script> tag for it on every HTML page, and makes it
  // easier in the future for you to replace jQuery with a different
  // library or write purely in native JavaScript, if you choose.
  function loadjQuery() {
    var jQ;
    if (window.jQuery) {
      return pageSetup();
    }
    else {
      jQ = document.createElement("script");
      jQ.src = jQueryURL;
      jQ.onload = jQ.onreadystatechange = pageSetup;
      // Log an error if jQuery fails to load from the URL specified
      jQ.onerror = function() {
        console.log("Unable to load jQuery from", jQueryURL);
      };
      return document.body.appendChild(jQ);
    }
  }

  function pageSetup() {
    // Release the $ variable from jQuery:
    // jQuery 3.x-style ready event:
    jQuery(
      // Pass in jQuery as $:
      function($) {
        // Call the customJavaScript function declared above:
        customJavaScript($);
      }
    );
  }

  function runJS() {
    if (window.addEventListener) {
      window.addEventListener("load", loadjQuery, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", loadjQuery);
    }
  }

  return {
    main: runJS
  };

})();

// Call and run the returned `main` method on `rpk`:
rpk.main();
