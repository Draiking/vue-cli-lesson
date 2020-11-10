<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>Form Input</h2>

    <select v-model="soc">
      <option v-for="s of social" :key="s">{{ s }}</option>
    </select>

    <hr />

    <p>{{ soc }}</p>
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
      title: "Hello i am Vue",
      defaultSocial: "Facebook",
      soc: "Inst",
      social: ["Inst", "Vk", "Facebook"],
    };
  },
  computed: {},
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    },
  },
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
