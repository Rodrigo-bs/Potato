export default function initFormaPagamento() {
    const ops = document.querySelectorAll('.form-comprar__forma-pagamento button')
    const cartao = document.querySelector('.form-comprar__cartao')
    const boleto = document.querySelector('.form-comprar__boleto')

    function handleClick(event) {
        event.preventDefault()

        ops.forEach(op => op.classList.remove('forma-pagamento__op-ativo'))
        event.target.classList.add('forma-pagamento__op-ativo')

        if(event.target.hasAttribute('cartao')) {
            cartao.classList.add('form-comprar__dados_pagamento-ativo')
            boleto.classList.remove('form-comprar__dados_pagamento-ativo')
        } else {
            cartao.classList.remove('form-comprar__dados_pagamento-ativo')
            boleto.classList.add('form-comprar__dados_pagamento-ativo')
        }

    }

    ops.forEach(op => op.addEventListener('click', handleClick))
}