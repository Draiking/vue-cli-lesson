<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" :class="{'is-invalid': $v.email.$error}" @blur="$v.email.$touch()" v-model="email" />
                <div v-if="!$v.email.email" class="invalid-email">
                    not email
                </div>
                <div v-if="!$v.email.uniqEmail" class="invalid-email">
                   This email is already exits
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" :class="{'is-invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password" />
                <div v-if="!$v.password.minLength" class="invalid-email">
                    Min Length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
                </div>
              
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input 
                type="password" 
                id="confirmPassword" 
                class="form-control" 
                :class="{'is-invalid': $v.confirmPassword.$error}" 
                @blur="$v.confirmPassword.$touch()" v-model="confirmPassword" />
                <div v-if="!$v.confirmPassword.sameAs" class="invalid-email">
                    Пароли не совпадают
                </div>
              
            </div>

            <button class="btn btn-success" 
            type="submit"
            :disabled="$v.$invalid">submit</button>

        </form>
    </div>
</div>
</template>

<script>
import {
    required,
    email,
    minLength,
    sameAs
} from 'vuelidate/lib/validators'

export default {
    name: "App",

    components: {},
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        onSubmit() {
            console.log('Email ', this.email)
            console.log('password ', this.password)
        }
    },
    validations: {
        email: {
            required,
            email,
            uniqEmail(newEmail) {
                return new Promise((resolve) => {
                    if (newEmail === '') return true
                    setTimeout(() => {
                        const value = newEmail !== 'test@mail.ru'
                        resolve(value)
                    }, 1000)
                })
            }
        },
        password: {
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs('password')
        }
    },
    watch: {
      password(value) {
        return value.length
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
