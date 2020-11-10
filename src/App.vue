<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
    <li v-for="name of filteredNames" :key="name">{{name}}</li>
    </ul>

    
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  
  },
  data() {
      return {
          title: 'Hello i am Vue',
          searchName: '',
          names: ['vlad', 'max', 'elena', 'igor']
      }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return  name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
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
