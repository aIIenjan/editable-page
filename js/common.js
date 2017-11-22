$(function() {
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
});

// 折叠层
function toggleFun($this) {
	if($this.hasClass('cur')) {
		$this.removeClass('cur');
		$this.next('.tag-con').removeClass('cur');
	}else {
		$this.addClass('cur');
		$this.next('.tag-con').addClass('cur');
	}
}