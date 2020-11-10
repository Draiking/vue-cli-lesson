<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>Form Input</h2>

    <input type="text" v-model.number='age'>

    <p>{{age}}</p>

  </div>
</template>

<script>
import ListMixin from "./listMixin";

export default {
  name: "App",
  mixins: [ListMixin],
  components: {},
  data() {
    return {
      age: 20
    };
  },
  computed: {},
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    },
  },
  watch: {
    age(value) {
        console.log(value)
    }
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
</style>
