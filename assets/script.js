$(function() {
  var widget = SC.Widget("so");
  $('.btn').click(function() {
    widget.toggle();
    console.log("play button clicked");
    $('.btn').toggleClass('play');
  });  
});

// Soundcloud widget - so you can control it on the page
// https://stackoverflow.com/questions/36458962/soundcloud-widget-api-seekto-does-not-work-with-paused-audio
var player = SC.Widget('player');
var miliseconds = -1;

player.bind(SC.Widget.Events.PLAY, function() {
    if (miliseconds >= 0) {
        player.seekTo(miliseconds);
    }
});

seekTo = function(minutes, seconds) {
    miliseconds = ((minutes * 60) + seconds) * 1000;

    player.isPaused(function isPaused(p) {
        if (p == true) {
            player.play();
        } else {
            player.seekTo(miliseconds);
        }
    });
}