
new Vue({
	el: '#app',
	data: {
		modelInfo: false,
	},
	methods:{
<<<<<<< HEAD
		modelInfoShow: function(){
=======
		modelInfoShow: function() {
>>>>>>> 9ba4c55168496416542508bbfd742225e710de9b
			this.modelInfo = !this.modelInfo;
			this.modelInfo ? $( '.model-info' ).css({left: 0}) : $( '.model-info' ).css({left: -502})
		}
	},
<<<<<<< HEAD
	mounted: function(){
=======
	mounted: function() {
>>>>>>> 9ba4c55168496416542508bbfd742225e710de9b

	},
	components:{


	}
})






