import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
import router from './routes';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


