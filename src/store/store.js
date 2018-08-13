import Vuex from 'vuex'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
	const store =  new Vuex.Store({
		strict: isDev,
		state: {
			curNavIndex: 0,
			headerIsShow: false,
			pullPageSlide: 'slide-left',
			headerText: '',
			resultIsShow: false,
			cartList: [],
			urlStack: []//浏览记录栈
		},
		getters: {
			cartCount(state) {
				let count = 0
				state.cartList.map((item) => {
					if(item.checked === 1){
						count += parseInt(item.num)
					}				
				})
				return count
			},
			cartTotalPrice(state) {
				let price = 0
				state.cartList.map((item) => {
					if(item.checked === 1){
						price += parseInt(item.price) * item.num
					}
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
			//所有修改购物车都通过mutation
			setCartList(state, data) {
				state.cartList = data
				//如果没有cart  footer就显示
				if(data.length === 0){
					state.footerIsShow = true
				}
			},
			setUrlStack(state, url) {

				// if(state.urlStack[1] === url) {
				// 	state.pullPageSlide = 'slide-right'
				// 	state.urlStack.shift()
				// }
				// else{
				// 	state.pullPageSlide = 'slide-left'
				// 	state.urlStack.unshift(url)
				// }
				let length = state.urlStack.length
				//length-1是当前页面path,-2是前一个页面的path,准备跳转页面的path是传入的url
				if(state.urlStack[length - 2] === url) {
					state.pullPageSlide = 'slide-right'
					state.urlStack.pop()
				}
				else{
					state.pullPageSlide = 'slide-left'
					state.urlStack.push(url)
				}
			}
		}
	})

	return store
}