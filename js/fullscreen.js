(function () {
    var isFull = false;
    var $obj = $('#view-fullscreen');

    // 判断是否全屏状态
    function fullScreenAuto() {
        isFull = !isFull;
        if(isFull) {
            $obj.addClass('on');
            $obj.find('span').html('退出全屏');
        }else {
            $obj.removeClass('on');
            $obj.find('span').html('全屏');
        }
    }

    // 全屏浏览器兼容
    document.addEventListener('webkitfullscreenchange', function(){
        fullScreenAuto();
    }); 
    document.addEventListener('fullscreenchange', function(){
        fullScreenAuto();
    });

    document.addEventListener('mozfullscreenchange', function(){
        fullScreenAuto();
    });

    document.addEventListener('MSFullscreenChange', function(){
        fullScreenAuto();
    });

    var viewFullScreen = document.getElementById('view-fullscreen');
    if (viewFullScreen) {
        var checkFull = viewFullScreen.addEventListener("click", function () {
            // alert(1);
            if($obj.hasClass('on')) {
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
            }else {
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
            }
        }, false);
    }
})();