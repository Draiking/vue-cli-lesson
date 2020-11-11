<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h5>Car Year: {{ year }}</h5>

    <div class="scroll">
        <h6 id="scroll">hello from the bottom</h6>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return this.$route.query.year;
    },
  },
  beforeRouteEnter(next) {
      next(true)
  }
};
</script>

<style scroped>
.scroll {
  width: 100px;
  height: 1000px;
  background: #ccc;
}
</style>