<template>
    <div>
        <h5>Counter: {{counter}}</h5>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        }
    }
</script>