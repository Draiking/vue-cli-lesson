import Vue from 'vue';
import App from './App.vue';
import ColorDirective from './color';
import List  from './components/List.vue';

Vue.directive('colored', ColorDirective)

Vue.filter('upperCase', (value) => {
  return value.toUpperCase()
})

Vue.component('app-list', List)

new Vue({
  render: h => h(App),
}).$mount('#app')


