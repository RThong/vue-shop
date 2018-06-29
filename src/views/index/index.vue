<template>
	<div class="app-view app-view-with-footer">
		<header class="header">
			<div class="app-header-wrapper">
				<div class="app-header-left">
					<div class="app-header-item">
						<img src="../../assets/images/logo.png" alt="">
					</div>
				</div>
				 <!-- @click="$store.commit('setFooterIsShow')" -->
				<div class="app-header-middle" @click="goSearch">
					<div class="search-wrapper">
						<i class="image-icons icon-search"></i>
						<span class="search-text">搜索商品名称</span>
					</div>
				</div>
				<div class="app-header-right" @click="goUser">
					<div class="app-header-item">
						<i class="image-icons icon-user"></i>
					</div>
				</div>
			</div>
			<div class="tab">
				<div :class="curTabIndex===index?'active tab-label':'tab-label'" v-for="(item,index) in tabList" @click="tabChange(index)">
					<span>{{item.name}}</span>
				</div>
			</div>
		</header>
		<div class="page-wrapper">
			<transition :name="transitionName">
				<keep-alive>
					<component :is="tabList[curTabIndex].component" class="bodys" ref="scrollTarget"></component>
				</keep-alive>
			</transition>

		</div>
	</div>
</template>
<script>
	import Recommend from '../../components/recommend/recommend.vue'
	import Phone from '../../components/phone/phone.vue'
	export default {
		data() {
			return {
				scrollTop: 0,
				transitionName: '',
				lastTabIndex: '',
				curTabIndex: 0,
				tabList: [
					{
						name: '推荐',
						component: 'recommend'
					},
					{
						name: '手机',
						component: 'phone'
					},
					{
						name: '智能',
						component: 'recommend'
					},
					{
						name: '电视',
						component: 'phone'
					},
					{
						name: '电脑',
						component: 'recommend'
					},
					{
						name: '双摄',
						component: 'phone'
					},
					{
						name: '全面屏',
						component: 'recommend'
					},
					{
						name: '生活周边',
						component: 'phone'
					},
					{
						name: '盒子',
						component: 'recommend'
					}
				],
			}
		},
		components: {
			Recommend,
			Phone
		},
		mounted() {
			this.$store.commit('setHeaderIsShow', false)
		},
		activated() {
			//保存滚动
			this.$refs.scrollTarget.$el.scrollTop = this.scrollTop 
		},
		deactivated() {
			this.scrollTop = this.$refs.scrollTarget.$el.scrollTop
		},
		computed: {
		},
		methods: {
			tabChange(index) {
				this.lastTabIndex = this.curTabIndex
				this.curTabIndex = index

				this.transitionName = this.curTabIndex < this.lastTabIndex ? 'slide-right' : 'slide-left'
			},
			goUser() {
				this.$router.push('user')
			},
			goSearch() {
				// this.$store.commit('setPullPageSlide', 1)
				this.$router.push('search')
			}
		}
	}
</script>
<style lang="scss" scoped>
	$mainColor: #ed5b00;
	$bgColor: #f2f2f2;
	.header{
		position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    background: #f2f2f2;
    .app-header-wrapper{
    	height: 50px;
    	display: flex;
    	align-items: center;
    	.app-header-item{
    		width: 31px;
    		margin: 0 13px; 
    	}
    	.image-icons{
    		width: 31px;
    		height: 31px;
    		display: block;
    	}
    	.app-header-left{
				img{
					display: block;
					width: 25px;				
				}
    	}   	
    	.app-header-middle{
    		flex: 1;
    		border: 1px solid #e8e8e8;
    		font-size: 14px;
				.search-wrapper{
					display: flex;
					height: 31px;					
					background: #fff;
					align-items: center;
					.icon-search{
						background-image: url(../../assets/images/icon-search.png);
						background-size: 22px 22px;
					}
					.search-text{
						color: #cbcbcb;
					}
				}
    	}
    	.app-header-right{
				.icon-user{
					background-image: url(../../assets/images/icon-user.png);
					background-size: 20px 20px;
				}			
    	}
    }
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
    overflow: hidden;
    .bodys{
    	position: absolute;
    	top: 84px;
    	left: 0;
    	bottom: 0;
    	width: 100%;
    	overflow-x: hidden;
    	overflow-y: auto;
    	transition:transform .4s cubic-bezier(.55,0,.1,1);
    }
	}
</style>