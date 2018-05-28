import Vuex from 'vuex'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
	const store =  new Vuex.Store({
		strict: isDev,
		state: {
			curNavIndex: 0,
			footerIsShow: true
		},
		mutations: {
			setNavIndex(state, index) {
				state.curNavIndex = index
			},
			setFooterIsShow(state) {
				console.log(1111)
				state.footerIsShow = !state.footerIsShow
			}
		}
	})

	return store
}