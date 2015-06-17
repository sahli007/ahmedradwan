
(function(){
  $(document).ready(function() {

    var removePreloading = function() {
      $('#loader-wrapper').css('display','none');
      $('#all').css('display','initial');
      resizeVideo();
    }

    $('#test').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
      function(e) {
        removePreloading();
      });

    setTimeout(function(){$('body').addClass('loaded')}, 2000);

  })

})();
