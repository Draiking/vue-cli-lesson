<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
    <li v-for="name of filteredNames" :key="name">{{name}}</li>
    </ul>

    <hr>

    <app-list></app-list>

    
  </div>
</template>

<script>

import ListMixin from './listMixin'

export default {
  name: "App",
  mixins: [ListMixin],
  components: {
  
  },
  data() {
      return {
          title: 'Hello i am Vue'
      }
  },
  computed: {
    
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
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
