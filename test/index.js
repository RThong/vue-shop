import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import a from './a.vue'
import b from './b.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', component: a }, // No props, no nothing
    { path: '/b', component: b }
  ]
})

new Vue({
  el: '#root',
  router,
  render: h => h(app)
  // components: {
  //   app
  // },
  // template: `<app></app>`
})