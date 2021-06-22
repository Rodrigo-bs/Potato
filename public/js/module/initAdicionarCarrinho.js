import CreateObject from './MyCreateClass.js'

export default function iniCarrinho() {
    const buttons = document.querySelectorAll('[data-dados="adicionar"]')

    const config = {
        tags: 
        [
            {
                tagName: 'div',
                class: 'carrinho__item'
            },
            {
                tagName: 'img'
            },
            {
                tagName: 'div',
                class: 'carrinho__item_content'
            },
            {
                tagName: 'h1'
            },
            {
                tagName: 'p',
            },
            {
                tagName: 'button'
            },
            {
                tagName: 'div',
                class: 'carrinho__apagar'
            }
        ]
    }

    function appendItems(elements) {
        let container = elements[0]

        elements.forEach((element, i) => i != 0 ? elements[0].append(element) : false)
        elements.forEach((element, i) => i >= 3 ? elements[2].append(element) : false)

        return container
    }

    function deleteItem(event) {
        const container = event.target.parentElement.parentElement
        container.classList.add('anima__sumir')

        setTimeout(() => container.remove(), 300)
    }

    function pushInfos(event) {
        const itemCarro = new CreateObject(config)
        const target = event.target.parentElement.parentElement
        event.preventDefault()
        
        const img = target.querySelector('.venda__item img').src
        const titulo = target.querySelector('.venda__item h2').innerText
        const valorUnitario = +target.querySelector('.venda__item p').getAttribute('infos')
        const numeroProdutos = target.querySelector('.venda__input_numero input').value

        const elements = itemCarro.insertContent([
            {
                key: 3,
                content: titulo
            },
            {
                key: 4,
                content: `${valorUnitario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} - 1kg`
            },
            {
                key: 5,
                content: 'Ver Mais Detalhes'
            },
            {
                key: 6,
                content: 'X'
            }
        ])

        let elementBox = appendItems(elements)
        const p = elementBox.querySelector('p')
        const imgItem = elementBox.querySelector('img')

        imgItem.src = img
        p.setAttribute('infos', `${valorUnitario * numeroProdutos} ${numeroProdutos}`)
        p.setAttribute('valor-unitario', valorUnitario)

        document.querySelector('.carrinho__content').appendChild(elementBox)        

        const buttonExit = document.querySelectorAll('.carrinho__apagar')
        buttonExit.forEach(button => button.addEventListener('click', deleteItem))
        console.log(buttonExit)
    }

    buttons.forEach(button => button.addEventListener('click', pushInfos))
}