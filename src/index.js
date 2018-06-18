import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import Toast from './components/toast'

Vue.use(Toast)

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
//   console.log(sessionStorage.getItem('user'))
//   next(vm => {
//     console.log(vm)
//   })
// })
new Vue({
	el: '#root',
	router,
	store,
	render: h => h(App)
})