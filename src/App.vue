<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>parent: {{carName}}</h1>
    <app-car 
    :carName="carName"
    :carYear="carYear"
    ></app-car>
</div>
</template>

<script>
import Car from './components/car'


export default {
    name: 'App',
    components: {
        appCar: Car
    },
    data() {
        return {
            carName: 'Ford',
            carYear: '2018'
        }
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
