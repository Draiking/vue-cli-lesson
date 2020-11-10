<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>{{title}}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ title | upperCase | lowercase }}</h2>
    
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  
  },
  data() {
      return {
          title: 'Hello i am Vue'
      }
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
