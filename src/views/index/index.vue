<template>
	<div class="s">
		<div class="tab">
			<div :class="curTabIndex===index?'active tab-label':'tab-label'" v-for="(item,index) in tabList" @click="tabChange(index)">
				<span>{{item}}</span>
			</div>
		</div>
		<div class="tab-container">
			<div v-show="curTabIndex===index" class="bodys" v-for="(item,index) in 2" >
				<div :class="`component-list-main tabindex${index}`"></div>
			</div>
		</div>


	</div>
</template>
<script>
	import Vue from 'vue'
	import Computer from '../computer/computer.vue'
	import Tv from '../tv/tv.vue'

	export default {
		data() {
			return {
				curTabIndex: 0,
				tabList: ['推荐','手机','智能','电视','电脑','双摄','全面屏','生活周边','盒子'],
				pageList: [
					{
						component: Computer,
						show: false
					},
					{
						component: Tv,
						show: false
					}
				]
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
			tabChange(index) {
				this.curTabIndex = index

				if(!this.pageList[index].show){
					let instance
					instance = Vue.extend(this.pageList[index].component)
					new instance().$mount(`.tabindex${index}`)
					this.pageList[index].show = true
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.tab{
		white-space: nowrap;
		overflow-x: auto;
		.tab-label{
			background: $bgColor;
			text-align: center;
			display: inline-block;
			padding: 0 13px;
			height: 34px;
			span{
				display: inline-block;
				color: #747474;
				height: 100%;
				font-size: 14px;
				line-height: 32px;				
			}
		}
		.tab-label.active span{
			border-bottom: 2px solid $mainColor;
		}	
	}

</style>