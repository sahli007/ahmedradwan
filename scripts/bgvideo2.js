
  // Youtube Video Background for Unbounce. V1.0
  
  // lpVideoBG('#SectionID', 'YoutubeVideoID', width, height, muted);
  // Use '#lp-pom-root' for a full page video background
  //lpVideoBG('#waterfall-div', 'LDnomLRD0F4', 560, 315, true);

   var player;

  function lpVideoBG(pageSectionID, youtubeVideoCode, videoWidth, videoHeight, muted) {

    var framedVideoDivID = 'framedVideo-' + pageSectionID.substr(1);

    var contentDivID = pageSectionID;
    var videoPosition = 'absolute'; 

    function resizeVideo() {

      var widthOfSection = $(pageSectionID).width(); 
      var heightOfSection = $(pageSectionID).height(); 
      
      
      var newRatio = widthOfSection/videoWidth;

      //Obtain new height and vertical offset
      var newHeight = videoHeight * newRatio;

      //Size up video if less then section height
      if (newHeight <= heightOfSection) {
        var heightRatio = heightOfSection/newHeight;
        newHeight = heightOfSection * heightRatio;
      }

      //Adjust width based on new height
      var widthRatio = newHeight/videoHeight;
      var newWidth = videoWidth * widthRatio;

      var widthOffset = ((newWidth-widthOfSection) / 2);
      var heightOffset = ((newHeight-heightOfSection) / 2);


      //Offset and resize video
      $("#" + framedVideoDivID)[0].setAttribute("height", newHeight);
      $("#" + framedVideoDivID)[0].setAttribute("width", newWidth);
      $("#" + framedVideoDivID).css({ top: -heightOffset, left: -widthOffset, position:videoPosition });       
    }
    
    $(contentDivID).css({"width":"100%", "margin-left":"0", "overflow":"hidden"});
    
    $(contentDivID).prepend('<div style="height:100%;width:100%;position:absolute; top:0px"><iframe id="' + framedVideoDivID + '" width="100%" height="100%" src="https://www.youtube.com/embed/' + youtubeVideoCode + '?autoplay=1&controls=0&iv_load_policy=3&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=' + youtubeVideoCode + '&enablejsapi=1" frameborder="0" allowfullscreen style="display:block"></iframe></div>');
    
    
    $(contentDivID).prepend('<div style="height:100%;width:100%;position:absolute; top:0px"></div>');

    resizeVideo();

    $( document ).ready(function() {
      resizeVideo();
    }); 

    $( window ).resize(function() {
      resizeVideo();
    }); 
    
    
    //Append events to existing Youtube JS functions

    var originalOnPlayerReady = onPlayerReady;
    onPlayerReady = function(event) {
      originalOnPlayerReady(event);
      if (muted) {
        event.target.mute();
      }
    }

    var originalOnPlayerStateChange = onChangedState;
    onChangedState = function(event) {
      originalOnPlayerStateChange(event);
      event.target.mute();
      if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById(framedVideoDivID).style.display = 'block';
      }
    }


    var originalYouTubeReady = onYouTubeIframeAPIReady;
    onYouTubeIframeAPIReady = function() {
      originalYouTubeReady();
      player = new YT.Player(framedVideoDivID, {
        loop: '1',
        events: {  
          'onReady': onPlayerReady, 
          'onStateChange': onChangedState
        }
      });
    }

  }

  function onYouTubeIframeAPIReady() {
  }
  
  function onPlayerReady(event) { 
  }

  function onChangedState(event) {
  }  

