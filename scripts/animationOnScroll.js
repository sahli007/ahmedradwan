(function() {

  var scrollTimer = null;
  $(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
      }
    scrollTimer = setTimeout(handleScroll, 30);   // set new timer
  });


  var flag = true;
  var flag2 = true;
  var sectionFlags = {
    'first': true,
    'second':true,
    'third':true,
    'fourth': true,
    'fifth': true
  };

  function handleScroll() {

    var scrollPosition = $(window).scrollTop();
    var height = $(window).height();
    if(scrollPosition > 0.5*height && sectionFlags.first)  {
      $('#CS-div hr').addClass('spreadOutLine');
      $('#CS-div img, #about-me-h1').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#about-me-p').addClass('fadeInUp animated displayON').removeClass('displayOFF');
      sectionFlags.first = false;
      return;
    }

    if(scrollPosition > 1.2*height && sectionFlags.second)  {
      $('.life-section i').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#toggler a, #toggler, #mylife-div h2').addClass('fadeInDown animated displayON').removeClass('displayOFF');
      $('#work, #sections-wrapper').addClass('fadeInUp animated displayON').removeClass('displayOFF');
      if (flag2)
      {
        $('#workLine').css('width','85%');
        flag2 = false;
      }
      sectionFlags.second = false;
      return;
    }

    if(scrollPosition > 2.2 *height && sectionFlags.third) {
      $('#skills-list-wrapper').addClass('displayON').removeClass('displayOFF');
      $('.fa-star').addClass('fadeInRight animated');
      $('#skills-list a, #skills-list i').addClass('fadeInLeft animated');
      $('#skills-list-wrapper h1, #skills-list-wrapper h2, #skills-list-wrapper h3').addClass('fadeInDown animated');
      $('#skills-list hr').addClass('spreadOutLine');
      sectionFlags.third = false;
      return;
    }

    if(scrollPosition > 3.2 *height && sectionFlags.fourth) {
      $('#travel-box h2').addClass('fadeInLeft animated displayON').removeClass('displayOFF');
      $('#photo-box h2').addClass('fadeInRight animated displayON').removeClass('displayOFF');
      if(flag) {
        $('#travel-box').slideme('play');
        flag=false;
      }
      sectionFlags.fourth = false;
      return;
    }

    if(scrollPosition > 4.2 *height && sectionFlags.fifth) {
      $('#map, #map h2').addClass('fadeIndown animated displayON').removeClass('displayOFF');
      sectionFlags.fifth = false;
      return;
    }

  }

})();
