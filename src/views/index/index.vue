<template>
	<div class="container">
		<header class="header">
			<div class="tab">
				<div :class="curTabIndex===index?'active tab-label':'tab-label'" v-for="(item,index) in tabList" @click="tabChange(index)">
					<span>{{item.name}}</span>
				</div>
			</div>
		</header>
		<div class="page-wrapper">
			<!-- <div v-show="curTabIndex===index" class="bodys" v-for="(item,index) in 2">
				<div :class="`component-list-main tabindex${index}`"></div>
			</div> -->
			<!-- <div ：class="curTabIndex===index?'bodys slide-left-enter':" v-for="(item,index) in 2">
				<div :class="`component-list-main tabindex${index}`"></div>
			</div> -->
			<transition :name="transitionName">
				<component :is="tabList[curTabIndex].component" class="bodys"></component>
			</transition>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'

	export default {
		data() {
			return {
				transitionName: '',
				lastTabIndex: '',
				curTabIndex: 0,
				tabList: [
					{
						name: '推荐',
						component: 'computer'
					},
					{
						name: '手机',
						component: 'tv'
					},
					{
						name: '智能',
						component: 'computer'
					},
					{
						name: '电视',
						component: 'computer'
					},
					{
						name: '电脑',
						component: 'computer'
					},
					{
						name: '双摄',
						component: 'computer'
					},
					{
						name: '全面屏',
						component: 'computer'
					},
					{
						name: '生活周边',
						component: 'computer'
					},
					{
						name: '盒子',
						component: 'computer'
					}
				],
			}
		},
		components: {
			Computer: () => import('../../components/computer/computer.vue'),
			Tv: () => import('../../components/tv/tv.vue')
		},
		mounted() {
		},
		computed: {
		},
		methods: {
			tabChange(index) {
				this.lastTabIndex = this.curTabIndex
				this.curTabIndex = index

				this.transitionName = this.curTabIndex < this.lastTabIndex ? 'slide-right' : 'slide-left'
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header{
		position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    background: #f2f2f2;
		.tab{			
			/*z-index: 2;		*/
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
	}
	.page-wrapper{
		position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .bodys{
    	position: absolute;
    	top: 34px;
    	left: 0;
    	width: 100%;
    	height: 7000px;
    	transition:transform .4s cubic-bezier(.55,0,.1,1);
    }
	}
</style>