<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <app-car></app-car>
</div>
</template>

<script>
import Car from './components/car'


export default {
    name: 'App',
    components: {
        appCar: Car
    }
}
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
