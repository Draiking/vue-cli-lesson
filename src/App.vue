<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>parent: {{ carName }}</h1>

    <app-counter :counter="counter"></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="nameChange($event)"
      @counterUpdated="counter = $event"
    ></app-car>
  </div>
</template>

<script>
import Car from "./components/car";
import Counter from "./components/Counter";

export default {
  name: "App",
  components: {
    appCar: Car,
    appCounter: Counter
  },
  data() {
    return {
      carName: "Ford",
      carYear: 2018,
      counter: 0
    };
  },
  methods: {
    changeNameToAudi() {
      this.carName = "Audi";
    },
    nameChange(event) {
        console.log(event);
        this.carName = event;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
