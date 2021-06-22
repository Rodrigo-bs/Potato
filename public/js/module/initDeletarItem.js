import observer from './initObserver.js'

export default function initDeletarItem() {
    const deleteButton = document.querySelectorAll('.administracao__apagar')
    const config = {
        attributes: false,
        childList: true,
        subtree: false
    }

    function deleteItem(event) {
        const container = event.currentTarget.parentElement.parentElement

        container.classList.add('anima__sumir')
        setTimeout(() => container.remove(), 400)
    }

    function mostrarMen(container) {
        const men = document.createElement('a')
        men.innerText = 'Adicione Mais Receitas!!!'
        men.classList.add('men')
        men.setAttribute('href', './adicionarReceita.html')

        container.append(men)
    }

    function checarNum() {
        const container = document.querySelector('.minhas_receitas__content')
        let numFilhos = container.children.length

        if(numFilhos == 0) 
            mostrarMen(container)
    }

    checarNum()
    observer(checarNum, '.minhas_receitas__content', config)
    deleteButton.forEach(button => button.addEventListener('click', deleteItem))
}