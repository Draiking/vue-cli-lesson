<template>
<div>
    <h1>Cars pages</h1>
   <ul>

      <router-link tag="li" v-for="car in 5" :key="car" :to="'/car/' + car">
        <a>Car: {{ car }}</a>
      </router-link>

    </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      car: Number,
    };
  },
};
</script>


<style scroped>
</style>