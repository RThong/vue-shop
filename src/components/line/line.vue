<template>
	<div class="line">
		<router-link to="" class="image-icons" :class="className">
			<span>{{title}}</span>
			<span class="arrow"></span>
		</router-link>
	</div>
</template>
<script>
	export default {
		props: ['title', 'className'],
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss" scoped>
	.line{
		margin-top: 10px;
		background: #fff;
		padding: 0 40px 0 25px;
		a{
			display: flex;
			height: 51px;
			padding-left: 40px;
			-ms-align-items: center;
			align-items: center;
			justify-content: space-between;
			font-size: 14px;
			color: $navColor;
			.arrow{
				position: relative;
			}
		}
		.image-icons{
			background-repeat: no-repeat;
			background-size: 25px auto;
			background-position: 0px;
		}
	}
</style>