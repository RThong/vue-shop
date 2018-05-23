<template>
	<div>
		<!-- <div class="tab" ref="nav" :style="translateX" class="tab-wrapper" @touchstart="touchStart" @touchmove="touchMove"> -->
		<div class="tab">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
		</div>
		<button ref="btn">click</button>
		<div class="tab-container">
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				originPosition: '',
				dist: 0
			}
		},
		mounted() {
			// let instance = this
			// this.$refs.nav.addEventListener('touchstart', function(e){
			// 	e.preventDefault()
			// 	instance.test++
			// })
		},
		computed: {
			// translateX(){
			// 	return `transform: translate3d(${this.dist}px,0,0)`
			// }
		},
		methods: {
			touchStart(e) {
				this.originPosition = e.touches[0].clientX - this.dist
			},
			touchMove(e) {
				this.dist = e.touches[0].clientX - this.originPosition
				console.log(this.dist)
				if(this.dist <= 0){
					this.dist = 0
				}
				else if(this.dist >= this.$refs.nav.clientWidth){
					this.dist = this.$refs.nav.clientWidth
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.tab{
		white-space: nowrap;
		overflow-x: auto;
		div{
			background: green;
			height: 200px;
			width: 20%;
			text-align: center;
			display: inline-block;
		}		
	}
</style>