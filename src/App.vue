<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input 
          type="email"
          id="email" 
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email" />
          <div v-if="!$v.email.required"  class="invalid-email">
            Email field required
          </div>
            <div v-if="!$v.email.email"  class="invalid-email">
            not email
          </div>
        </div>


       
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'



export default {
  name: "App",

  components: {},
  data() {
    return {
      email: ''
    };
  },
  computed: {

  },
  validations: {
    email: {
        required,
        email
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
