(function () {
    var $obj = $('#view-fullscreen');
    var viewFullScreen = document.getElementById("view-fullscreen");
    if (viewFullScreen) {
        var checkFull = viewFullScreen.addEventListener("click", function () {
            if($obj.hasClass('on')) {
                $obj.removeClass('on');
                // $obj.find('span').html('全屏');
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                // viewFullScreen.style.display = 'inline-block';
                // cancelFullScreen.style.display = 'none';
            }else {
                $obj.addClass('on');
                // $obj.find('span').html('退出全屏');
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                }
                else if (docElm.msRequestFullscreen) {
                    docElm = document.body; //overwrite the element (for IE)
                    docElm.msRequestFullscreen();
                }
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                }
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                }
                // cancelFullScreen.style.display = 'inline-block';
                // viewFullScreen.style.display = 'none';
            }
        }, false);
    }
})();