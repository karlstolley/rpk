//Site JavaScript

$(document).ready(function() {
  $('body').addClass('hasjs');
  rpkwidescreen();
  $(window).resize(rpkwidescreen);
  });

function rpkwidescreen() {
    var rpkwidth = $(window).width();
    if(rpkwidth>1100) { $('body').addClass('widescreen'); }
    else { $('body').removeClass('widescreen'); }
}
