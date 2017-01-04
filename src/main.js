import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'

import store from './store/index'
import router from './router/index'

import Components from './components/_index'


Vue.use(Vuetify)
sync(store, router)
Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})
/*
new Vue({
  el: '#app',
  render: h => h(App)
})
//*/

const app = new Vue(Vue.util.extend({
  router,
  store
},App))
app.$mount('#app');
//export { app, router, store }
