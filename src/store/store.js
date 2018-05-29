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

		},
		mutations: {
			setNavIndex(state, index) {
				if(index > state.curNavIndex){
					state.pullPageSlide = 'slide-left'
				}
				else if(index < state.curNavIndex){
					state.pullPageSlide = 'slide-right'
				}
				state.curNavIndex = index
			},
			setHeaderIsShow(state, status) {
				state.headerIsShow = status
			},
			setPullPageSlide(state, direct) {
				if(direct === -1) {
					state.pullPageSlide = 'slide-right'
				}
				else if(direct === 1){
					state.pullPageSlide = 'slide-left'
				}
			},
			setHeaderText(state, text) {
				state.headerText = text
			}
		}
	})

	return store
}