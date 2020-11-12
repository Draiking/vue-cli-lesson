<template>
  <div id="app" class="container">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>

import Counter from './components/Counter';
import Actions from './components/Actions';

export default {
  name: "App",
  components: {
    appCounter: Counter,
    appActions: Actions
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: gray;
}
</style>
