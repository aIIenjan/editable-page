
Vue.component('point',{
	props: ['msg'],
	template: 
	'<div class="point">'+
	'	<div class="point-cont">'+
	'		<div class="point-cont-header">'+
	'			<p>提示信息</p>'+
	'			<span class="point-close" @click="close()">X</span>'+
	'		</div>'+
	'		<div class="point-cont-body">{{msg}}</div>'+
	'	</div>'+
	'<div class="point-mask" @click="close()"></div>'+
	'</div>',
	methods: {
		close: function(){
			this.$emit( 'renders','')
			$( '.point' ).hide();
		}
	},
})



new Vue({
	el: '#app',
	data: {
		render: '',//渲染那个组件
		msg: '',//提示信息
		modelInfo: false,
		backColor: '',

	},
	methods:{
		modelInfoShow: function(){
			this.modelInfo = !this.modelInfo;
			if( this.modelInfo ){
				$( '.model-info' ).css({left: 0});
			}else{
				$( '.model-info' ).css({left: -502});
				// $( '.model-color' ).val('');//输入框初始化
			}
		},
		confirmData: function(){//更新
			this.backColor = '#' + $( '.model-color' ).val();
			this.render = 'point';
			this.msg = '更新成功!';
		},
		saveData: function(){//保存
			this.render = 'point';
			this.msg = '保存成功!';
		},
		renders: function( data ){
			this.render = data;
		}
	},
	mounted: function(){
		
	},
	components: {
		
	}
})






