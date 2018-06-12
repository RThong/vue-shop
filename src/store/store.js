import Vuex from 'vuex'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
	const store =  new Vuex.Store({
		strict: isDev,
		state: {
			curNavIndex: 0,
			headerIsShow: false,
			pullPageSlide: '',
			headerText: '',
			resultIsShow: false
			// user: undefined
		},
		// getters: {
		// 	cartList(state){
		// 		console.log('getters')
		// 		if(state.user === undefined){
		// 			return []
		// 		}
		// 		else{
		// 			return state.user.cartList
		// 		}				
		// 	}
		// },
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
			// setUser(state, user){
			// 	state.user = user
			// }
		}
	})

	return store
}