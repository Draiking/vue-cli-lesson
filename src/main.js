import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
import vuelidate from 'vuelidate';
import ColorDirective from './color';



Vue.use(vuelidate)

Vue.directive('colored', ColorDirective)

Vue.filter('upperCase', (value) => {
  return value.toUpperCase()
})



new Vue({
  render: h => h(App),
}).$mount('#app')


