import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
Vue.use(Vuetify)

import store from './store/index'
import router from './router/index'
import backend from './backend/index'
Vue.use(backend) //Give access to this.$backend
sync(store, router)

import Components from './components/_index'


Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})
/*
new Vue({
  el: '#app',
  render: h => h(App)
})
//*/
/**
const app = new Vue(Vue.util.extend({
  router,
  store
},App))
app.$mount('#app');
/**/
var app = new Vue({
  store, // inject store to all children
  router, // inject router to all children
  el: '#app',
  render: h => h(App)
})
//console.log("router",router)
//console.log("store",store)
//console.log("backend",backend)
//console.log("App",App)
console.log("app",app)

window.app = app; //Attach to DOM for bus message accessibility

//export { app, router, store }
