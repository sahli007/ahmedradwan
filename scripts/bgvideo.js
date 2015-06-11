
var player;
var framedVideoDivID;

var contentDivID;
var videoPosition = 'absolute'; 

var muted = true;
var pageSectionID = '#waterfall-div';
var youtubeVideoCode = 'LDnomLRD0F4' ;
var videoWidth = 560;
var videoHeight = 315;

contentDivID = pageSectionID;
framedVideoDivID = 'framedVideo-' + pageSectionID.substr(1);

function resizeVideo() {

  var widthOfSection = $(pageSectionID).width(); 
  var heightOfSection = $(pageSectionID).height(); 

  if (pageSectionID == '#lp-pom-root') {  
    heightOfSection = $(window).height();
  }

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
    
    $(contentDivID).append('<div style="height:100%;width:100%;position:absolute; top:0px"><iframe id="'+framedVideoDivID+'" width="100%" height="100%" src="https://www.youtube.com/embed/' + youtubeVideoCode + '?autoplay=1&controls=0&iv_load_policy=3&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=' + youtubeVideoCode + '&enablejsapi=1" frameborder="0" allowfullscreen style="display:block; visibility:hidden; "></iframe></div>');
    
    $(contentDivID).append('<div style="height:100%;width:100%;position:absolute; top:0px"></div>');
    $(pageSectionID + '-color-overlay').appendTo(contentDivID);

    resizeVideo();

    $( window ).resize(function() {
      resizeVideo();
    }); 

    $( document ).ready(function() {
      resizeVideo();
    });

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



    function onYouTubeIframeAPIReady() {
      console.log('here');
      document.getElementById(framedVideoDivID).style.visibility = 'visible';
      player = new YT.Player(framedVideoDivID, {
        loop: '1',
        events: {  
          'onReady': onPlayerReady, 
          'onStateChange': onPlayerStateChange
        }
      });
    };

    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById(framedVideoDivID).style.visibility = 'visible';
      } else if (event.data == YT.PlayerState.ENDED) {
        document.getElementById(framedVideoDivID).style.visibility = 'hidden';
      }
    };

    function onPlayerReady(event) {
      player.setLoop(true);
      if (muted == 1) {
        event.target.mute();
      }
    };




