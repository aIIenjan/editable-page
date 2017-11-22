
new Vue({
	el: '#app',
	data: {
		modelInfo: false,
	},
	methods:{
		modelInfoShow(){
			this.modelInfo = !this.modelInfo;
			this.modelInfo ? $( '.model-info' ).css({left: 0}) : $( '.model-info' ).css({left: -502})
		}
	},
	mounted(){

	},
	components:{


	}
})






