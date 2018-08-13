<template>
	<div class="app-view app-view-with-header result-wrapper">
		<card-one v-for="(item, index) in productList" :id="item.id" :img="item.cover" :price="item.price" :redBrief="item.redBrief" :brief="item.brief" :name="item.name" :key="index"></card-one>
		<div class="empty" v-if="productList.length === 0">
			<img src="../../assets/images/empty.png" alt="">
			抱歉，暂时没有与"{{query}}"相关的商品
		</div>
	</div>
</template>
<script>
	import db from 'model'
	import cardOne from '../../components/card-one/card-one.vue'
	export default {
		name: 'result',
		data() {
			return {
				query: '',
				productList: []
			}
		},
		components: {
			cardOne
		},
		mounted() {
			this.query = this.$route.query.key
			this.searchProduct()
			this.$store.commit('setHeaderText', this.query)
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
		},
		// activated() {
		// 	this.$store.commit('setHeaderText', this.query)
		// 	if(!this.$store.state.headerIsShow){
		// 		this.$store.commit('setHeaderIsShow', true)
		// 	}
		// },
		methods: {
			async searchProduct() {
				const res = await db.searchProduct(this.query)
				this.productList = res
				console.log(this.productList);
			}
		},
		beforeRouteLeave(to, from, next) {
			this.$store.commit('setHeaderIsShow', false)
			next()
		},
		
	}
</script>
<style lang=scss scoped>
	.result-wrapper{
		overflow-y: auto;
	}
	.empty{
		text-align: center;
		margin-top: 30px;
		color: #999;
		img{
			width: 100px;
			margin: 0 auto;
			margin-bottom: 30px;
		}
	}
</style>