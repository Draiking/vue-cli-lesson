<template>
    <div>
        <h5>Second Counter: {{counter}}</h5>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.computedCounter 
            }
        }
    }
</script>