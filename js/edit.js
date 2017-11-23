
new Vue({
	el: '#app',
	data: {
		modelInfo: false,
		back_color: '',
		isback_color: {background: ''},
	},
	methods:{
		modelInfoShow: function(){
			this.modelInfo = !this.modelInfo;
			this.modelInfo ? $( '.model-info' ).css({left: 0}) : $( '.model-info' ).css({left: -502})
		},
		saveData: function(){
			console.log( this.back_color )
			if( this.back_color[0] =='#' ){
				this.isback_color.background = this.back_color;
			}else{
				this.isback_color.background = 'rgb('+this.back_color+')';
			}
		}
	},
	mounted: function(){
	},
	components:{


	}
})






