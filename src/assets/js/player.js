let video = document.querySelector('.video');
let line = document.querySelector('.orange-line');
let btn = document.querySelector('.play-pause');

function togglePlayPause() {
   if(video.paused){
      btn.className = 'pause';
      video.play();
   }   else {
      btn.className = 'play';
      video.pause();
   }
}

btn.onclick = function() {
   togglePlayPause();
};

video.addEventListener('timeupdate', function(){
   let linePos = video.currentTime / video.duration;
   line.style.width = linePos * 100 + "%";
   if(video.ended){
      btn.className = 'play';
      video.load();
   }
});