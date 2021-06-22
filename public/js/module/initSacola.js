export default function initSacola() {
    const sacola = document.querySelector('[data-sacola="sacola"]')
    const carrinho = document.querySelector('[data-sacola="carrinho"]')
    const sairCarrinho = document.querySelector('[data-sacola="fechar"]')

    function handleClick(event) {
        event.preventDefault()
        carrinho.classList.toggle('carrinho-ativo')
    }

    sairCarrinho.addEventListener('click', handleClick)
    sacola.addEventListener('click', handleClick)
}