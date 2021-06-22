export default function initQuantidade() {
    const ponteiros = document.querySelectorAll('[data-num]')

    function handleClick(event) {   
        const tipo = this.getAttribute('data-num')

        if(tipo == 'somar') 
            this.nextElementSibling.value = +(this.nextElementSibling.value) + 1
        else if(tipo == 'sub' && (+this.previousElementSibling.value - 1) > 0)
            this.previousElementSibling.value = +(this.previousElementSibling.value) - 1
    }

    ponteiros.forEach(ponteiro => {
        ['click', 'ontouchstart'].forEach(evento => ponteiro.addEventListener(evento, handleClick))
    })
}