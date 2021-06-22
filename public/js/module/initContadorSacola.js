import observer from './initObserver.js'

export default function initContadorSacola() {
    observer(() => {
        const numElementos = document.querySelectorAll('.carrinho__content .carrinho__item').length
        const sacola = document.querySelector('[data-sacola="sacola"]')
        sacola.innerText = numElementos
    })
}