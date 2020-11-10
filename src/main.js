import Vue from 'vue';
import App from './App.vue';
import ColorDirective from './color'

Vue.directive('colored', ColorDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')


