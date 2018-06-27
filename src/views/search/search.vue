<template>
	<div class="app-view">
		<header class="header">
			<div class="header-left" @click="goBack">
				<div class="header-item">
					<i class="image-icons icon-left-arrow"></i>
				</div>
			</div>
			<div class="header-middle">
				<div class="header-input">
					<input type="text" placeholder="搜索商品名称" v-model="query">
				</div>
			</div>
			<div class="header-right" @click="search">
				<div class="header-item">
					<i class="image-icons icon-search"></i>
				</div>
			</div>
		</header>
		<div class="hot-title">
			热门搜索
		</div>
		<div class="big-img">
			<img v-lazy="'https://i8.mifile.cn/b2c-mimall-media/38af6033fa4409e3844029d76b60cdc6.jpg?bg=FFFFFF'" alt="">
		</div>
		<div class="search-key">
			<router-link :to="{path: '/search/list', query: {key: '红米5'}}">红米5</router-link>
			<router-link :to="{path: '/search/list', query: {key: '笔记本'}}">笔记本</router-link>
			<router-link :to="{path: '/search/list', query: {key: 'Note'}}">Note</router-link>
			<router-link :to="{path: '/search/list', query: {key: '小米电视'}}">小米电视</router-link>
			<router-link :to="{path: '/search/list', query: {key: '投影仪'}}">投影仪</router-link>
			<router-link :to="{path: '/search/list', query: {key: '米家'}}">米家</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'search',
		data(){
			return {
				query: ''
			}
		},
		mounted() {
		},
		methods: {
			goBack() {
				// this.$store.commit('setPullPageSlide', -1)
				this.$router.go(-1)
			},
			search() {
				if(this.query === ''){
					return
				}
				this.$router.push({
					path: '/search/list',
					query: {
						key: this.query
					}
				})
			}			
		},
	}
</script>
<style lang="scss" scoped>
	$bgColor: #f2f2f2;
	$navColor: #3c3c3c;
	.app-view{
		padding-top: 50px;
	}
	.header{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
		background: $bgColor;
		.header-item{
			margin: 0 13px;
		}
		.image-icons{
			display: block;
			width: 31px;
			height: 31px;
		}
		.header-left{
			.icon-left-arrow{
				background-image: url(../../assets/images/left-arrow.png);
			}
		}
		.header-middle{
			flex: 1;
			.header-input{
				height: 31px;
				background: #fff;
				width: 100%;
				padding: 0 10px;
				border: 1px solid #e5e5e5;
				line-height: 31px;
				input{
					width: 100%;
				}
			}
		}
		.header-right{
			.icon-search{
				background-image: url(../../assets/images/icon-search.png);
			}			
		}
	}
	.hot-title{
		height: 42px;
		line-height: 42px;
		padding-left: 20px;
		font-size: 14px;
		color: $navColor;
		background: #fff;
	}
	.big-img{
		height: 104px;
	}
	.search-key{
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		a{
			display: inline-block;
			padding: 7px 10px;
			font-size: 12px;
			color: $navColor;
			border: 1px solid #e4e4e4;
			background: hsla(12,99%,71%,.05);
			margin: 5px;
		}
	}
</style>