export default {
    bind(el) {
        console.log('bind')
        el.style.color = 'blue'
    },

    inserted() {
        console.log('inserted')
    },

    update() {
        console.log('update')
    }
}