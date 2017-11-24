$(function() {

	// 禁止右键功能
	// document.oncontextmenu = function(e){
	// 	e.preventDefault();
	// }

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

});

// 折叠层js
function toggleFun($this) {
	$this.next('.tag-con').slideToggle();
	if($this.hasClass('cur')) {
		$this.removeClass('cur');
	}else {
		$this.addClass('cur');
	}
}

