$(document).ready(function(){resizeDiv();});

window.onresize = function(event) {
              resizeDiv();
            };

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();
  $('.wrapper').css({'min-height':vph+'px'});
  $('.wrapperTable').css({'height':vph+'px'});
  $('.wrapper').css({'width':vpw+'px'});
  $('.wrapperTable').css({'width':vpw+'px'});
  $('.halfWrapper').css({'min-height':vph+'px'});
  $('.wrapperHalf').css({'min-height':(vph/2)+'px'});
  $('.tableWrapper').css({'height':vph+'px'});
  // $('.slider li img').css({'height':vph+'px'}); 
}
