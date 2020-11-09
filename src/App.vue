<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <app-car>
        <h2 slot="title">{{carName}}</h2>
        <p slot="text">Lorem, ipsum dolor.</p>
    </app-car>
  </div>
</template>

<script>
import Car from "./components/car";


export default {
  name: "App",
  components: {
    appCar: Car,
  },
  data() {
      return {
          carName: 'Ford'
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
