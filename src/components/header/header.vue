<template>
	<header class="header">
		<div class="header-left">
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
		<div class="header-right">
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
			console.log(typeof this.isSearchPage)
		}
	}
</script>
<style lang="scss" scoped>
	.header{
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
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