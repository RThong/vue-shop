import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import './assets/styles/global.scss'

import createRouter from './config/router'

const router = createRouter()

Vue.use(Router)
new Vue({
	el: '#root',
	router,
	render: h => h(App)
})