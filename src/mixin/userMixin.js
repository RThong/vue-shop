export default {
	mounted() {		
		if(sessionStorage['user']){
			this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
		}	
	},
}