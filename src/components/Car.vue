<template>
    <div>
        <h1>Car id {{id}}</h1>

        <button 
        class="btn btn-sm btn-info"
        @click="backToCar"
        >Back</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // id: this.$router.currentRoute.params['id'] длинная запись
                id: this.$route.params['id']
            }
        },
        methods: {
            backToCar() {
                this.$router.push('/cars')
            }
        },
        watch: {
            $route(toR) {
                this.id = toR.params['id']
            }
        }
    }
</script>