(function() {
  $('.toggler-option').on('click',function() {
  	$('.toggler-option').addClass('unselected');
    $('#toggler hr').css('width','0px');
    $(this).removeClass('unselected').siblings().css('width','85%');

    var textId = '#' + $(this).attr('data-control');

    $('.life-section').addClass('fadeOutRight').removeClass('fadeInLeft fadeInUp');
    $(textId).addClass('fadeInLeft displayON').removeClass('displayOFF fadeOutRight');

  })

})();
