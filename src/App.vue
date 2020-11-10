<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>Form Input</h2>

    
    <label>
    <input type="radio" value="inst"  v-model="social"> Inst
    </label>

    <label>
    <input type="radio" value="vk"  v-model="social"> Vk
    </label>

    <label>
    <input type="radio" value="facebook" v-model="social"> Facebook
    </label>

    <hr>

    
    <p>{{social}}</p>

    
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
          title: 'Hello i am Vue',
          social: ''
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
