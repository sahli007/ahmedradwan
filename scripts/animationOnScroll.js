(function() {

  var scrollTimer = null;
  $(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
      }
    scrollTimer = setTimeout(handleScroll, 100);   // set new timer
  })


  var flag = true;
  var flag2 = true;

  function handleScroll() {
    height = $(window).height();
    if($(window).scrollTop() > 0.5*height)  {
      $('#CS-div hr').addClass('spreadOutLine');
      $('#CS-div img').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#about-me-h1').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#about-me-p').addClass('fadeInUp animated displayON').removeClass('displayOFF');
    }

    if($(window).scrollTop() > 1.5*height)  {
      $('.life-section i').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#toggler a, #toggler').addClass('fadeInDown displayON').removeClass('displayOFF');
      $('#mylife-div h2').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#work, #sections-wrapper').addClass('fadeInUp animated displayON').removeClass('displayOFF');
      if (flag2)
      {
        $('#workLine').css('width','85%');
        flag2 = false;
      }

    }

    if($(window).scrollTop() > 2.5 *height) {
      $('#skills-list-wrapper').addClass('displayON').removeClass('displayOFF');
      $('.fa-star').addClass('fadeInRight animated');
      $('#skills-list a, #skills-list i').addClass('fadeInLeft animated');
      $('#skills-list-wrapper h1, #skills-list-wrapper h2, #skills-list-wrapper h3').addClass('fadeInDown animated');
      $('#skills-list hr').addClass('spreadOutLine');

    }

    if($(window).scrollTop() > 3.5 *height) {
      $('#travel-box h2').addClass('fadeInLeft animated displayON').removeClass('displayOFF');
      $('#photo-box h2').addClass('fadeInRight animated displayON').removeClass('displayOFF');
      if(flag) {
        $('#travel-box').slideme('play');
        flag=false;
      }
    }

    if($(window).scrollTop() > 4.5 *height) {
      $('#map, #map h2').addClass('fadeIndown animated displayON').removeClass('displayOFF');
    }

    if($(window).scrollTop() > 5.5 *height) {
      $('#waterfall-box h2').addClass('fadeIndown animated displayON').removeClass('displayOFF');
    }

  };

})();
