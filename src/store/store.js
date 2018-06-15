import Vuex from 'vuex'
import db from '../../app.config'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
	const store =  new Vuex.Store({
		strict: isDev,
		state: {
			curNavIndex: 0,
			headerIsShow: false,
			pullPageSlide: '',
			headerText: '',
			resultIsShow: false,
			footerIsShow: true,
			cartList: []
		},
		getters: {
			cartCount(state) {
				let count = 0
				state.cartList.map((item) => {
					count += item.num
				})
				return count
			},
			cartTotalPrice(state) {
				let price = 0
				state.cartList.map((item) => {
					console.log(parseInt(item.price))
					price += parseInt(item.price) * item.num
				})
				return price
			},
		},
		mutations: {
			//设置footer的index
			setNavIndex(state, index) {
				if(index > state.curNavIndex){
					state.pullPageSlide = 'slide-left'
				}
				else if(index < state.curNavIndex){
					state.pullPageSlide = 'slide-right'
				}
				state.curNavIndex = index
			},
			//设置header显示
			setHeaderIsShow(state, status) {
				state.headerIsShow = status
			},
			//设置footer显示
			setFooterIsShow(state, status) {
				state.footerIsShow = status
			},
			//设置result显示
			setResultIsShow(state, status) {
				state.resultIsShow = status
			},
			//左右滑动切换页面
			setPullPageSlide(state, direct) {
				if(direct === -1) {
					state.pullPageSlide = 'slide-right'
				}
				else if(direct === 1){
					state.pullPageSlide = 'slide-left'
				}
			},
			//设置header文字
			setHeaderText(state, text) {
				state.headerText = text
			},
			setCartList(state, data) {
				state.cartList = data
			}
		},
	})

	return store
}