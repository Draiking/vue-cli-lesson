import Vue from 'vue';
import App from './App.vue';
import Car from './components/car.vue'

Vue.component('app-car', Car)

new Vue({
  render: h => h(App),
}).$mount('#app')
