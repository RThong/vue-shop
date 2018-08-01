<template>
	<div>a
		<router-link to="/b">click me</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				i: 0,
				timer: ''
			}
		},
		mounted() {
			console.log(this.i);
			this.timer = setInterval(() => {
				console.log(this.i++);
			}, 1000)
			this.$once('hook:beforeDestroy', () => {
				clearInterval(this.timer)
			})
		},
		// activated() {
		// 	console.log(this.i);
		// 	this.timer = setInterval(() => {
		// 		console.log(this.i++);
		// 	}, 1000)
		// },
		// deactivated() {
		// 	clearInterval(this.timer)
		// }
		// beforeDestroy() {
		// 	clearInterval(this.timer)
		// }
	}
</script>