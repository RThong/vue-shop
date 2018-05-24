<template>
	<div>
		<div class="tab">
			<div v-for="index in 2" @click="tiggle(index)">{{index}}</div>
		</div>
		<div class="tab-container">
			<div v-show="a===index" class="bodys" v-for="index in 2" >
				<div :class="`component-list-main tabindex${index}`"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Computer from '../computer/computer.vue'
	import Tv from '../tv/tv.vue'
	let obj = [
		{
			component: Computer,
			show: false
		},
		{
			component: Tv,
			show: false
		}
	]
	export default {
		data() {
			return {
				a: 1,
			}
		},
		components: {
			// Computer: () => import('../computer/computer.vue'),
			// Tv: () => import('../tv/tv.vue')
			// Computer,
			// Tv
		},
		mounted() {
		},
		computed: {
		},
		methods: {
			tiggle(index) {
				this.a = index
				console.dir(this)
				if(!obj[index-1].show){
					let instance
					instance = Vue.extend(obj[index-1].component)
					new instance().$mount(`.tabindex${index}`)
					obj[index-1].show = true
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.tab{
		white-space: nowrap;
		letter-spacing: -0.5em;
		overflow-x: auto;
		div{
			background: green;
			/*height: 200px;*/
			width: 20%;
			text-align: center;
			display: inline-block;
			padding: 20px;
		}		
	}
</style>