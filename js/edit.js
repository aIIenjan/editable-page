
new Vue({
	el: '#app',
	data: {
		modelInfo: false,
	},
	methods:{
		modelInfoShow: function() {
			this.modelInfo = !this.modelInfo;
			this.modelInfo ? $( '.model-info' ).css({left: 0}) : $( '.model-info' ).css({left: -502})
		}
	},
	mounted: function() {

	},
	components:{


	}
})






