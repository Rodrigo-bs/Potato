export default function initLogin() {
    const button = document.querySelectorAll('A[href="#login"]')
    const login = document.querySelector('.login')
    const overflow = document.querySelector('.overflow-login')
    const body = document.body
    const btnSair = document.querySelector('.login__fechar')

    function handleClick(event) {
        event.stopPropagation()
        event.preventDefault()

        login.classList.add('login-ativo')
        overflow.classList.add('overflow-ativo')

        handleClickBody() 
    }

    function exit() {
        login.classList.remove('login-ativo')
        overflow.classList.remove('overflow-ativo')
    }

    function handleClickBody() {
        if(!login.hasAttribute('ativo')) {
            login.setAttribute('ativo', '')
            body.addEventListener('click', function(event) {
                handleEvent(event)
            })
        }
    }

    function handleEvent(event) {
        if(!login.contains(event.target)) {
            login.classList.remove('login-ativo')
            overflow.classList.remove('overflow-ativo')
        }
    }

    btnSair.addEventListener('click', exit)
    button.forEach(button => button.addEventListener('click', handleClick))
}