
$('.slide').on('click', function(){
  $('#fade-in').toggleClass('show');
});

$('.spin').on('click', function(){
  $('#spin-in').toggleClass('show2');
});

$('h1.spacing').on('mouseenter', function(){
$(this).toggleClass('spaced');
});




// nav

function onClickMenu(){
  document.getElementById("menu").classList.toggle("change");
 document.getElementById("nav").classList.toggle("change");
 }

const menuOpen = document.querySelector('.menuopen');
const menuClose = document.querySelector('.menuclose');
const nav = document.querySelector('.nav');
menuOpen.addEventListener('click',menuTog);
menuClose.addEventListener('click',menuTog);

function menuTog(e){
    nav.classList.toggle('active')
}










      $(document).ready(function(){
        var mediaBreakPoint = '(max-width:1440px)';
        

         if (window.matchMedia(mediaBreakPoint).matches) {
          $(".head").hide();
          $(function (){
            $(window).scroll(function (){
              if ($(this).scrollTop() >100){
                $('.head').fadeIn();
    
              } else{
                $('.head').fadeOut();
              
                // $('').css('color'='green');
              }
            });
          });
        }

     

      });




  
    //accordion
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(200);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(200);
            $(this).children(".plusminus").text('+')
            // $(this).children(".plusminus").text('+').css("transform","translateY(0)");
        } else {
             $(this).next(".accordion_body").slideDown(200);
            //  $(".plusminus").addClass(".acc-size");
            // $(this).children(".plusminus").text('-');
             $(this).children(".plusminus").text('__')
            
           
        }
    });

    // accordion

    // $(document).ready(function() {
    //   $(".set > a").on("click", function() {
    //     if ($(this).hasClass("active")) {
    //       $(this).removeClass("active");
    //       $(this)
    //         .siblings(".content")
    //         .slideUp(200);
    //       $(".set > a i")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //     } else {
    //       $(".set > a i")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //       $(this)
    //         .find("i")
    //         .removeClass("fa-plus")
    //         .addClass("fa-minus");
    //       $(".set > a").removeClass("active");
    //       $(this).addClass("active");
    //       $(".content").slideUp(200);
    //       $(this)
    //         .siblings(".content")
    //         .slideDown(200);
    //     }
    //   });
    // });
    


 
  // Video
var VideoPlayer = { 
  init: function() {     
    video.volume = 1;
    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");
    video = document.getElementById("video");
    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");
    volumeBar.value = video.volume;
    // Controls
    videoControls = document.getElementById("video__controls");
    playCenterButton = document.getElementById("video__play__centerButton");
    caption = document.getElementById("video__caption");
    // Event listener for the play/pause button 
    VideoPlayer.hideControls(); 
    //display control on mousemove
    document.getElementById("video__container").addEventListener("mousemove", function() {   
      VideoPlayer.showControls(); 
    });
    videoControls.addEventListener("mouseover", function() {   
      VideoPlayer.showControls();
      clearTimeout(hideControl);
    });
    playButton.addEventListener("click", function() {
      playVideo();
    });
    playCenterButton.addEventListener("click", function() { 
      playVideo();
    }); 
    function playVideo(){ 
      if (video.paused == true) {
        // Play the video
        video.play();
        // Update the button text to 'Pause'
        playButton.classList.toggle("fa-play");
        playButton.classList.toggle("fa-pause");
        playCenterButton.classList.toggle("fa-play");
        playCenterButton.classList.toggle("fa-pause");
        playCenterButton.style.opacity = 0;
      } else {
        // Pause the video
        video.pause();
        // Update the button text to 'Play'
        playButton.classList.toggle("fa-play");
        playButton.classList.toggle("fa-pause");
        playCenterButton.classList.toggle("fa-play");
        playCenterButton.classList.toggle("fa-pause");
        playCenterButton.style.opacity = .8;
      }
    };

    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
      if (video.muted == false) {
        // Mute the video
        video.muted = true;
        // Update the volume Bar
        volumeBar.value = 0;
      } else {
        // Unmute the video
        video.muted = false;
        // Update the volume Bar
        volumeBar.value = video.volume;
      }
    });

    // Checks if the document is currently in fullscreen mode
    var isFullScreen = function() {
      return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    // Fullscreen
    fullScreenButton.addEventListener("click", function() {
      // If fullscreen mode is active...	
      if (isFullScreen()) {
         // ...exit fullscreen mode
        // (Note: this can only be called on document)
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();       
      } else {
        if (video.requestFullscreen) video.requestFullscreen();
        else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
        else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen();
        } else if (video.msRequestFullscreen) video.msRequestFullscreen();
        VideoPlayer.hideControls();         
      }
    });

    // Event listener for the seek bar
    var seekBarActive = false;
    seekBar.addEventListener("mousedown", function() {
      seekBarActive = true;
      clearTimeout(hideControl);
    });
    seekBar.addEventListener("mouseup", function() { 
      seekBarActive = false;
      VideoPlayer.hideControls(); 
    });
    seekBar.addEventListener("mousemove", function() {
      if (seekBarActive == true){
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);
        // Update the video time
        video.currentTime = time;
        clearTimeout(hideControl);
      }
    });
    
    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
      // Update the slider value
      seekBar.value = value;
    });
    
    // Event listener for the volume bar
    var volumeBarActive = false;
    volumeBar.addEventListener("mousedown", function() {
      volumeBarActive = true;
      clearTimeout(hideControl);
    });
    volumeBar.addEventListener("mouseup", function() { 
      volumeBarActive = false;

    });
    volumeBar.addEventListener("mousemove", function() {
      if (volumeBarActive == true){
        video.volume = volumeBar.value;
        clearTimeout(hideControl);
      }
    });
  },
  hideControls: function(){
    hideControl = setTimeout(function(){ 
      videoControls.style.opacity = .0;
      playCenterButton.style.opacity = .0;
      caption.style.opacity = .0;
      [].forEach.call(document.getElementsByClassName("controls"), function(el) {
        el.style.visibility = "hidden";
      });
    }, 2000);  
  },
  showControls: function(){
    //Hide Display Control Bar
    videoControls.style.opacity = .8;
    playCenterButton.style.opacity = .8;
    caption.style.opacity = .8;
    [].forEach.call(document.getElementsByClassName("controls"), function(el) {
      el.style.visibility = "visible";
    });
    clearTimeout(hideControl);
    VideoPlayer.hideControls();  
  }
}

document.addEventListener('DOMContentLoaded', function () {
  VideoPlayer.init();
});

// 

     
  