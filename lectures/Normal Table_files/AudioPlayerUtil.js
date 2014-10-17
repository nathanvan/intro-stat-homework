var AudioPlayerUtil = new Class({
    
    initialize: function (audio, playpause, imgSrc1, imgSrc2)
    {	
        
        if(audio){
            audio.addEventListener("ended", function() {
                    playpause.title = "play";
                    playpause.getElement("img").src = imgSrc1;//innerHTML = "play";
            }, false);
            
            playpause.onclick = function(ev){
                ev.preventDefault();
                ev.stopPropagation();
                if (audio.paused || audio.ended) {
                       playpause.title = "pause";
                       playpause.getElement("img").src = imgSrc2;
                       audio.play();
                    }
                    else {
                       playpause.title = "play";
                       playpause.getElement("img").src = imgSrc1;
                       audio.pause();
                    }
            };
            
        }
    }
});