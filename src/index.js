import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import './assets/styles/global.scss'

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