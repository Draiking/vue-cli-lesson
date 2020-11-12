import Vue from 'vue';
import App from './App.vue';
import store from '../store/index';
import "bootstrap/dist/css/bootstrap.css";




new Vue({
  render: h => h(App),
  store
}).$mount('#app')


