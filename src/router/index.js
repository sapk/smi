import Vue from 'vue'
import Router from 'vue-router'

//import GetStartedView from '../views/GetStartedView.vue'
const GetHelloView = { template: '<div>Hello World</div>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: GetHelloView }
  ]
})
