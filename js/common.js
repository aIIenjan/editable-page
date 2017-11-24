;(function($) {

	var dataMenu = {
		'first': [
			{
				tag: 'tabPanel',
				name: '标签面板',
				img: '../images/base/container_icon_2.png'
			},
			{
				tag: 'scrollWindow',
				name: '视窗面板',
				img: '../images/base/container_icon_1.png'
			}
		],
		'second': [
			{
				tag: 'text',
				name: '静态文字',
				img: '../images/base/control_icon_2words.png'
			},
			{
				tag: 'img',
				name: '静态图片',
				img: '../images/base/control_icon_1imge.png'
			},
			{
				tag: 'time',
				name: '时间',
				img: '../images/base/control_icon_3time.png'
			},
			{
				tag: 'weather',
				name: '天气',
				img: '../images/base/control_icon_5weather.png'
			},
			{
				tag: 'tabElement',
				name: '标签',
				img: '../images/base/control_icon_17label.png'
			},
			{
				tag: 'live',
				name: '直播窗口',
				img: '../images/base/control_icon_8player.png'
			},
			{
				tag: 'livechannel',
				name: '直播频道',
				img: '../images/base/control_icon_9live.png'
			},
			{
				tag: 'liveCloumn',
				name: '直播栏目',
				img: '../images/base/control_icon_10live.png'
			},
			{
				tag: 'vodAsset',
				name: '点播单片',
				img: '../images/base/control_icon_11vod.png'
			},
			{
				tag: 'vodCloumn',
				name: '点播栏目',
				img: '../images/base/control_icon_12vod.png'
			},
			{
				tag: 'reviewCloumn',
				name: '回看栏目',
				img: '../images/base/control_icon_13back.png'
			},
			{
				tag: 'application',
				name: '第三方应用',
				img: '../images/base/control_icon_14app.png'
			},
			{
				tag: 'link',
				name: '链接',
				img: '../images/base/control_icon_16connect.png'
			},
			{
				tag: 'recommend',
				name: '推荐位',
				img: '../images/base/control_icon_recommend.png'
			},
			{
				tag: 'topic',
				name: '专题',
				img: '../images/base/control_icon_special.png'
			},
			{
				tag: 'marqueeText',
				name: '跑马灯',
				img: '../images/base/control_icon_7marquee.png'
			},
			{
				tag: 'multi',
				name: '多图状态',
				img: '../images/base/control_icon_more.png'
			},
			{
				tag: 'popImage',
				name: '弹出图片',
				img: '../images/base/control_icon_23popup.png'
			}
		],
	}

	// 禁止右键功能
	// document.oncontextmenu = function(e){
	// 	e.preventDefault();
	// }

	var drawPanel = function($dom, type, className){
	    this.DOM = document.createElement('div');
	    this.DOM.setAttribute('data-type',type);
	    this.DOM.setAttribute('class',className);
	    this.appendTo = function(){
	        $dom.appendChild(this.DOM)
	        return this;
	    };
	    this.css = function(option){
	        for(var i in option){
	            this.DOM.style[i] = option[i];
	        }
	        return this;
	    };
        $(this.DOM).draggable({
			cursor: "move",
        	containment: 'parent',
        	drag: function(e, ui) {
        		ui.helper.css('z-index','999');
        	},
        	stop: function(e, ui) {
        		ui.helper.css('z-index','1');
        	}
        });
	};

	var $wrapper = $('#tag-con');
	var $wrapperSecond = $('#menu-con');
	var dataFirst = dataMenu.first;
	var dataSecond = dataMenu.second;

	// 左边菜单上面视窗
	for (var i = 0; i < dataFirst.length; i++) {
		var $panel = $('<div class="tag-con-list"><img src="' + dataFirst[i].img 
				+'" data-type="'+ dataFirst[i].tag +'" /><span>' + dataFirst[i].name + '</span></div>');
		$wrapper.append($panel);
		//拖拽
       $panel.find('img').draggable({
            addClasses: false,//提高性能
            cursor: "move",//光标
            helper:'clone',//克隆被拖拽,
            // revert: "invalid",//拖拽停止时未放置则回到原来位置
            revertDuration: 50,//动画时间
            containment: "screen",
            appendTo:".screen",
			scope	: 'drop',
            // accept: '.test-con',
            drag: function(event, ui) {
            },
            stop: function(event, ui) {
            	var popLeft = ui.offset.left - $('.screen').offset().left;
            	var popTop = ui.offset.top - $('.screen').offset().top;
            	var type = ui.helper.attr('data-type');
            	if(popLeft >0 && popTop >0 ) {
                    $dom = document.getElementById('screen');
                    var cssValue = '';
	            	if(type==='tabPanel') {
	                    var drawDIV = new drawPanel($dom, 'tabPanel', 'tabclass');
	                    drawDIV.appendTo();
	            		cssValue = {position:'absolute', 'border-radius':'6px', border:'1px dashed #fff',width:'800px',height:'80px', left: popLeft+'px', top: popTop+'px'};
	            	}else if(type==='scrollWindow') {
	                    var drawDIV = new drawPanel($dom, 'scrollPanel', 'scrollclass');
	                    drawDIV.appendTo();
	            		cssValue = {position:'absolute', 'border-radius':'6px', border:'1px dashed #fff',width:'1010px',height:'400px', left: popLeft+'px', top: popTop+'px'}
	            	}
                    drawDIV.css(cssValue);
               //      $(drawDIV.DOM).draggable({
            			// cursor: "move",
               //      	containment: 'parent',
               //      	drag: function(e, ui) {
               //      		ui.helper.css('z-index','999');
               //      	},
               //      	stop: function(e, ui) {
               //      		ui.helper.css('z-index','1');
               //      	}
               //      });
            	}
            },
            out: function(e, ui) {
                ui.draggable.remove();                      
            }
       });
	}

	for (var i = 0; i < dataSecond.length; i++) {
		var $panel = $('<div class="tag-con-list"><img src="' + dataSecond[i].img 
				+'" data-type="'+ dataSecond[i].tag +'" /><span>' + dataSecond[i].name + '</span></div>');
		$wrapperSecond.append($panel);
		//拖拽
       $panel.find('img').draggable({
            addClasses: false,//提高性能
            cursor: "move",//光标
            helper:'clone',//克隆被拖拽,
            revert: "invalid",//拖拽停止时未放置则回到原来位置
            revertDuration: 500,//动画时间
            containment: "screen",
            appendTo:".screen",
			scope	: 'drop',
            // accept: '.test-con',
            drag: function(event, ui) {
            },
            stop: function(event, ui) {
            	var popLeft = ui.offset.left - $('.screen').offset().left;
            	var popTop = ui.offset.top - $('.screen').offset().top;
            	var type = ui.helper.attr('data-type');
            	if(popLeft >0 && popTop >0 ) {
                    $dom = document.getElementById('screen');
                    var cssValue = '';
	            	if(type==='tabPanel') {
	                    var drawDIV = new drawPanel($dom, 'tabPanel', 'tabclass');
	                    drawDIV.appendTo();
	            		cssValue = {position:'absolute', 'border-radius':'6px', border:'1px dashed #fff',width:'800px',height:'80px', left: popLeft+'px', top: popTop+'px'};
	            	}else if(type==='scrollWindow') {
	                    var drawDIV = new drawPanel($dom, 'scrollPanel', 'scrollclass');
	                    drawDIV.appendTo();
	            		cssValue = {position:'absolute', 'border-radius':'6px', border:'1px dashed #fff',width:'1010px',height:'400px', left: popLeft+'px', top: popTop+'px'}
	            	}
                    drawDIV.css(cssValue);
                    $('.tabclass').draggable({
            			cursor: "move",
                    	containment: 'parent',
                    	drag: function(e, ui) {
                    		ui.helper.css('z-index','999');
                    	},
                    	stop: function(e, ui) {
                    		ui.helper.css('z-index','1');
                    	}
                    });
            	}
            },
            out: function(e, ui) {
                ui.draggable.remove();                      
            }
       });
	}

	// 左边变化js
	function autoHeight($obj) {
		var $winHeight = $(window).height();
		$obj.height($winHeight-90);
	}
	autoHeight($('.container'));

	// 改变浏览器大小
	$(window).resize(function() {
		autoHeight($('.container'))
	});

	// 左浮动滚动条效果
    $('.leftbar').mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"light-thick",
		scrollbarPosition:"inside"
	});

	// 右边标尺
    $('#content').ruler({
        unit: 'px',
        tickMajor: 100,
        tickMinor: 20,
        tickMicro: 10,
        showLabel: true,
        arrowStyle: 'arrow'
    });
    //调用标尺插件的变更背景图片的函数
	// $.ef.ruler.prototype.changeBgImag =function(url) {  
 //        this._changeBg(url);  
 //    };
 //    $('#content').ruler('changeBgImag','../images/bg_top.jpg');

	//颜色选择器
	$('#t_bg_color').colpick({
		layout:'hex',
		submit:0,
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			
			$(el).css('border-color','#'+hex);
			$( '.content-wrap' ).css('background','#'+hex);//改模板背景
			if(!bySetColor) $(el).val(hex);
		}
	}).keyup(function(){
		$(this).colpickSetColor(this.value);
	});
})(jQuery);

// 折叠层js
function toggleFun($this) {
	$this.next('.tag-con').slideToggle();
	if($this.hasClass('cur')) {
		$this.removeClass('cur');
	}else {
		$this.addClass('cur');
	}
}

// 预览显示
function previewPageShow($el, $dom) {
	$dom.show();
}

// 预览关闭
function previewPageHide($dom) {
	$dom.hide();
}
