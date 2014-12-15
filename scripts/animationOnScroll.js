(function() {

var flag = true;  
$(window).scroll(function() {
  height = $(window).height();
  if($(window).scrollTop() > 0.7*height){
    $('#CS-div hr').addClass('spreadOutLine');
    $('#imgs-wrapper').addClass('fadeInDown animated displayON');
    $('#about-me-h1').addClass('fadeInDown animated displayON');
    $('#about-me-p').addClass('fadeInUp animated displayON');

  }
  if($(window).scrollTop() > 1.7*height){
    $('.life-section i').addClass('fadeInDown animated displayON');
    $('#mylife-div h2').addClass('fadeInDown animated displayON');
    $('#mylife-div p').addClass('fadeInUp animated displayON');

  }

  if($(window).scrollTop() > 2.7 *height){
    $('#unknownCenter').addClass('displayON');
    $('.fa-star').addClass('fadeInRight animated displayON');
    $('#skills-list a').addClass('fadeInLeft animated displayON');
    $('#skills-list i').addClass('fadeInRight animated displayON');
    $('#unknownCenter h1, #unknownCenter h2, #unknownCenter h3').addClass('fadeInDown animated displayON');
    $('#skills-list hr').addClass('spreadOutLine displayON');

  }

  if($(window).scrollTop() > 3.7 *height){
    $('#travel-box h2').addClass('fadeInLeft animated displayON');
    $('#photo-box h2').addClass('fadeInRight animated displayON');
    if(flag) {
      $('#travel-box').slideme('play');
      console.log("done");
      flag=false;
    }
  }


  if($(window).scrollTop() > 4.7 *height){
    $('#map').addClass('fadeIndown animated displayON');
  }

  if($(window).scrollTop() > 6 *height){
    $('#waterfall-box h2').addClass('fadeIndown animated displayON');
  }


});

})();
