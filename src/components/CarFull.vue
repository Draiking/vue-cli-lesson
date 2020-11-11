<template>
    <div>
        <h4>Car name: {{ $route.query.name }}</h4>
        <h5>Car Year: {{ year }}</h5>
    </div>
</template>

<script>
    export default {
        computed: {
            year() {
                return this.$route.query.year
            }
        }
    }
</script>