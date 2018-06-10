<template>
	<transition name="fade" @after-leave="afterLeave()">
		<div id="toast" v-show="visiable">
			<div class="icon-wrap">
				<svg v-show="type==='success'" class="icon icon-1-copy">
					<use xlink:href="#icon-1-copy"></use>
				</svg>
				<svg v-show="type==='fail'" class="icon icon-jinggao">
					<use xlink:href="#icon-jinggao"></use>
				</svg>
			</div>
			<p>{{text}}</p>
		</div>
	</transition>
</template>
<script>
	import './iconfont'
	export default {
		name: 'Toast',
		props: ['text','type'],
		data() {
			return {
				visiable: true
			}
		},
		methods: {
			afterLeave(){
				this.$emit('closed')
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s
	}
	.fade-enter,.fade-leave-to{
		opacity: 0
	}

	#toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px 50px;
		background: rgba(0,0,0,.7);
		text-align: center;
		border-radius: 5px;
		.icon-wrap{
			.icon{
				width: 40px;
				height: 40px;
			}
			.icon-1-copy{
				fill: #47e61a;
			}
			.icon-jinggao{
				fill: #d8451d
			}
		}
		p{
			color: #f1f3f5;
		}
	}
</style>