<template>
	<header class="header">
		<div class="header-left" @click="goBack">
			<div class="header-item">
				<i class="image-icons icon-left-arrow"></i>
			</div>
		</div>
		<div class="header-middle">
			<div v-if="isSearchPage" class="header-input">
				<input type="text" placeholder="搜索商品名称">
			</div>
			<div v-else class="header-title">
				<slot></slot>
			</div>
		</div>
		<div class="header-right" @click="goSearch">
			<div class="header-item">
				<i class="image-icons icon-search"></i>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'Header',
		props: ['isSearchPage'],
		data() {
			return {

			}
		},
		mounted() {
		},
		methods: {
			goBack(){
				this.$router.go(-1)
			},
			goSearch(){
				this.$router.push('/search')
			}
		}
	}
</script>
<style lang="scss" scoped>
	$bgColor: #f2f2f2;
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
				input{
					width: 100%;
				}
			}
			.header-title{
				text-align: center;
				color: #666;
			}
		}
		.header-right{
			.icon-search{
				background-image: url(../../assets/images/icon-search.png);
			}			
		}
	}
</style>