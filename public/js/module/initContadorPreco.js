import observer from './initObserver.js'

export default function initContadorPreco() {
    observer(callback)

    function callback() {
        const infosContainer = document.querySelectorAll('.carrinho__item_content p')
        let valorTotal = 0

        infosContainer.forEach(infoContainer => {
            const infos = infoContainer.getAttribute('infos').split(' ')
            valorTotal += +infos[0]
        })

        inserirDados(valorTotal) 
    }

    function inserirDados(valorTotal) {
        const total = document.querySelector('.info_compras__total')
        total.innerText = `Total: R$ ${(valorTotal).toLocaleString('pt-BR')}`
    }
}