<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>Form Input</h2>

    <app-Onoff v-model="switched"></app-Onoff>

    <div>
    <h3 v-if="switched">component is enabled</h3>
    <h3 v-else>component is disabled</h3>
    </div>

  </div>
</template>

<script>
import ListMixin from "./listMixin";
import Onoff from "./components/Onoff";


export default {
  name: "App",
  mixins: [ListMixin],
  components: {
    appOnoff: Onoff
  },
  data() {
    return {
      switched: false
    };
  },
  computed: {},
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
</style>
