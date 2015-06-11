(function() {
  $('.toggler-option').on('click',function() {
  	$('.toggler-option').addClass('unselected');
    $('#toggler hr').css('width','0px');
    $(this).removeClass('unselected').siblings().css('width','85%');

    var textId = '#' + $(this).attr('data-control');
    console.log(textId);

    $('.life-section').addClass('fadeOutRight');
    $(textId).addClass('fadeInLeft displayON').removeClass('displayOFF fadeOutRight');
    
  })

})();
