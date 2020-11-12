<template>
  <div>
    <h1>Car id {{ id }}</h1>

    <button class="btn btn-default btn-info mb-2" @click="backToCar">
      Back
    </button>

    <br />

    <!-- <router-link
      class="btn btn-info mt-2"
      tag="button"
      :to="'/car/' + id + '/full'"
      >Info</router-link> -->

      <router-link
      class="btn btn-info mt-2"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
      >Info</router-link>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.currentRoute.params['id'] длинная запись
      id: this.$route.params["id"],
    };
  },
  methods: {
    backToCar() {
      this.$router.push("/cars");
    },
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    },
  },
  beforeRouteLeave(to, from, next) {
     if (window.confirm('Are you sure want to leave?')) {
         next()
     } else {
         next(false)
     }
  }
 };
</script>