export default function initListaProdutos() {
    const button = document.querySelector('.lista_preparo button')

    function adicionarItem(event) {
        const input = document.querySelector('.lista_preparo input').value
        const ul = document.querySelector('.lista_preparo ul')
        const li = document.createElement('li')
        li.innerText = input
        event.preventDefault()

        ul.appendChild(li)
    }

    button.addEventListener('click', adicionarItem)
}