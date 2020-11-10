export default {
    bind(el, bindings) {

        

        const fontModifiers = bindings.modifiers['font']

        if(fontModifiers) {
            el.style.fontSize = '30px'
        }
        
        const delayModifiers = bindings.modifiers['delay']

        let delay = 0

        if(delayModifiers) {
            delay = 2000
        }

        setTimeout(() => {
            const arg = bindings.arg
            el.style[arg] = bindings.value
        }, delay)
    }
}