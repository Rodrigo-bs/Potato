import observer from './initObserver.js'

export default function initMenMais() {
    observer(callback)

    function callback() {
        const btns = document.querySelectorAll('.carrinho__item_content button')

        function createElement(texto) {
            const elemento = document.createElement('div') 
            elemento.classList.add('carrinho__mensagem')
            elemento.innerText = texto

            return elemento
        }

        function handleEvent({target, pageY, pageX}) {
            const info = target.previousElementSibling.getAttribute('infos').split(' ')
            const precoUni = target.previousElementSibling.getAttribute('valor-unitario')

            const elemento = createElement(`R$ ${precoUni} X ${info[1]} = R$ ${info[0]}`)
            const elementos = document.querySelectorAll('.carrinho__mensagem')

            elementos.forEach(elemento => elemento.remove())
            document.body.appendChild(elemento)

            elemento.style.top = (+pageY + 10) + 'px'
            elemento.style.left = (+pageX + 10) + 'px'
        }

        function deleteMen() {
            const elementos = document.querySelectorAll('.carrinho__mensagem')
            elementos.forEach(elemento => elemento.remove())
        }


        btns.forEach(btn => btn.addEventListener('mouseleave', deleteMen))
        btns.forEach(btn => btn.addEventListener('mousemove', handleEvent))
    }
}