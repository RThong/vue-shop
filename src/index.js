import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  // preLoad: 1,
  // // error: 'dist/error.png',
  // loading: 'src/assets/images/loading.svg',
  // attempt: 1
})
import './assets/styles/global.scss'
import './assets/styles/Swiper.scss'

import createRouter from './config/router'
import createStore from './store/store'

Vue.use(Router)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

new Vue({
	el: '#root',
	router,
	store,
	render: h => h(App)
})