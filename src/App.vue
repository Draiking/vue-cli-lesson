<template>
  <div id="app">
    <div class="container">
      <ul class="nav">

        <router-link
          tag="li"
          class="nav-item"
          exact
          to="/"
          active-class="active"
        >
          <a class="nav-link">Home</a>
        </router-link>

        <router-link 
        tag="li" 
        class="nav-item" 
        to="/cars"
        active-class="active" 
        >
          <a class="nav-link">Cars</a>
        </router-link>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},
  data() {
    return {};
  },
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

.active {
  color: gray;
}
</style>
