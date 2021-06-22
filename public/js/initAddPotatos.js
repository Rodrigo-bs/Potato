import CreateObject from './module/MyCreateClass.js'

function initAddPotato() {
    const configs = {
        tags: 
        [
            {
                tagName: 'li',
                class: 'venda__item'
            },
            {
                tagName: 'img',
                attribute: 'alt potato-img'
            },
            {
                tagName: 'h2',
                attribute: 'data-dados titulo'
            },
            {
                tagName: 'p',
                attribute: 'data-dados infos'
            },
            {
                tagName: 'p',
                attribute: ['data-dados descricao', 'aria-hidden true']
            },
            {
                tagName: 'form',
            },
            {
                tagName: 'div',
                class: 'venda__input_numero'
            },
            {
                tagName: 'span',
                attribute: 'data-num somar'
            },
            {
                tagName: 'input',
                attribute: ['type number', 'value 1', 'name numero-batata', 'data-num numero']
            },
            {
                tagName: 'span',
                attribute: 'data-num sub'
            },
            {
                tagName: 'button',
                attribute: 'data-dados adicionar'
            }
        ]
    }

    const potato = new CreateObject(configs)

    function appendItems(elements) {
        let container = elements[0]
        
        elements.forEach((element, i) => i != 0 ? elements[0].append(element) : false)
        const nums = elements.filter(num => num.hasAttribute('data-num') ? true : false)

        const contentNum = container.querySelector('.venda__input_numero')
        nums.forEach(num => contentNum.append(num))

        const button = container.querySelector('button')
        container.querySelector('form').append(contentNum)
        container.querySelector('form').append(button)

        return container
    }

    async function appendInToBody() {
        const potatoFetch = await fetch('../public/produtos/produtos.json')
        const dates = await potatoFetch.json()

        dates.forEach(date => {
            const elements = potato.insertContent([
                {
                    key: 2,
                    content: date.nome,
                },
                {
                    key: 3,
                    content: `${date.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} - 1kg`
                },
                {
                    key: 4,
                    content: date.descricao
                },
                {
                    key: 7,
                    content: '+'
                },
                {
                    key: 9,
                    content: '-'
                },
                {
                    key: 10,
                    content: 'add ao Carrinho'
                }
            ])

            const potatoBox = appendItems(elements)
            potatoBox.querySelector('img').src = date.img
            potatoBox.querySelector('p').setAttribute('infos', date.valor)

            document.querySelector('.venda__itens').appendChild(potatoBox)
        })
    }

    appendInToBody()
}

initAddPotato()