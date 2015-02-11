// PLAYLIST 1 //

// variables
var youtube_tokens,
$player;

// functions
var bind_cassette;

//THESE ARE THE YOUTUBE VIDEOS FOR THE LINKS
youtube_tokens = ["XorEel9J6Ws", "E-Pjdb8_uKw", "odNCtE-I8o4", "tQh7OjYIGWA", "Kr326EmWB5U", "IXB6hgMDRZc", "23ySdftuMog", "b6DMIJ_DbF0", "hkq6im9D2xo", "olB7HAIUmgM", "Bxn5th2B-VI", "27UbBjV2B6w", "X0SNKNg9V2A"];

$player = $("div#video-player");

bind_cassette = function(youtube_token, $cassette){
$cassette.on("click",function(){
$player.html("<center><div class=\"video-container\"><iframe width=\"460\" height=\"259\" src=\"//www.youtube.com/embed/" + youtube_token + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe></div></center>")
});
}

$(".tracklistbtn").each(function(i,self){
bind_cassette(youtube_tokens[i], $(self));
});

