var VideoPlayer = new Class({
    
    initialize: function (video)
    {	
        
        if(video){
            var startCuePoint = null;
            var endCuePoint = null;
            var playAfterLoad = null;
            if(OLIMessenger){
                OLIMessenger.addListener(video.id, {
                    receiveMessage: function (source, message){
                        if(!video.paused){
                            video.pause();
                            video.currentTime = 0;
                        }
                        startCuePoint = null;
                        endCuePoint = null;
                        var vars = message.split(';');
                        for (var i = 0; i < vars.length; i++) {
                            var pair = vars[i].split('=');
                            if (pair[0] === "startcuepoint") {
                                startCuePoint = pair[1];
                            }
                            if (pair[0] === "endcuepoint") {
                                endCuePoint = pair[1];
                            }
                        }
                        if(startCuePoint){
                            var duration = video.duration;
                            if(duration){
                                video.currentTime = startCuePoint;
                                video.play();
                            }else{    
                                playAfterLoad = true;
                                if(video.currentSrc){
                                    video.src = (video.currentSrc.split("?"))[0] + "?t=" +new Date().getMilliseconds();
                                }
                                video.load();
                            }
                        }						
                    }
                });											
            }

            video.addEventListener("timeupdate", function() {
                    if(endCuePoint !== null && endCuePoint < video.currentTime){
                        video.pause();
                        video.currentTime = 0;
                    }
            }, false);	
            
            video.addEventListener("loadedmetadata", function(){
                if(playAfterLoad){                    
                    playAfterLoad = null;
                    video.currentTime = startCuePoint;
                    video.play();
                }
            }, false);
            
            video.addEventListener("canplay", function () {                  
                if(playAfterLoad){                    
                    playAfterLoad = null;
                    video.currentTime = startCuePoint;
                    video.play();
                }
            }, false);
            
            video.addEventListener("stalled", function () {
                //trace("Download was stalled");
            }, false);
            
            video.addEventListener("error", function (err) {
                //trace("Video Error " + err);
          }, true);
        }
    }
});