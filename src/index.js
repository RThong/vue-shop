import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import Toast from './components/toast'
// import Swiper from 'swiper'
Vue.use(Toast)
// Vue.use(Swiper)

Vue.use(VueLazyload, {
  // preLoad: 1,
  // // error: 'dist/error.png',
  // loading: 'src/assets/images/loading.svg',
  // attempt: 1
})
import './assets/styles/global.scss'

import createRouter from './config/router'
import createStore from './store/store'

Vue.use(Router)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// router.beforeEach((to, from, next) => {

//   console.log('before', from, to)
//   if(from.name) {
//   	sessionStorage.setItem('lastUrl', from.path)
//   }
//   next()
// })

// router.afterEach((to, from) => {
// 	if(sessionStorage.getItem('lastUrl') && sessionStorage.getItem('lastUrl') === to.path) {
// 		console.log('!!!!!')
// 		this.$store.commit('setPullPageSlide', -1)
// 	}
// 	console.log('after', from, to)

// })
const vm = new Vue({
	el: '#root',
	router,
	store,
	render: h => h(App)
})