export default function initInformacoes()  {
    const infoContainer = document.querySelector('[data-info="container"]')
    const overflow = document.querySelector('[data-info="overflow"]')
    const sair = infoContainer.querySelector('[data-info="sair"]')
    const imgs = document.querySelectorAll('.venda__item img')
    
    const body = document.body
    const classe = 'informacoes-ativo'

    function handleClick(event) {
        event.stopPropagation()
        infoContainer.classList.add(classe)
        overflow.classList.add(classe)

        handleClickBody(event.target)
        initInsert(event.target)
    }

    function exit() {
        infoContainer.classList.remove(classe)
        overflow.classList.remove(classe)
    }

    //ativar o click fora
    function handleClickBody(target) {
        if(!target.hasAttribute(classe)) {
            target.setAttribute(classe, '')
            body.addEventListener('click', function(event) {
                handleEvent(event, target)
            })
        }
    }

    //Verifica se onde eu to clicando não faz parte da area de informações
    function handleEvent(event, img) {
        if(!infoContainer.contains(event.target)) {
            infoContainer.classList.remove(classe)
            overflow.classList.remove(classe)
            img.removeAttribute(classe)
        }
    }

    //inserir infos
    function initInsert(img) {
        const content = img.parentNode
        const imgContent = img.getAttribute('src')
        const titulo = content.querySelector('[data-dados="titulo"]')
        const infos = content.querySelector('[data-dados="infos"]')
        const descricao = content.querySelector('[data-dados="descricao"]')
        const num = content.querySelector('[data-num="numero"]')

        document.querySelector('[data-num-info="numero"]').value = num.value
        document.querySelector('.informacoes__img').setAttribute('src', imgContent)
        document.querySelector('.informacoes__content_titulo').innerText = titulo.innerText
        document.querySelector('.informacoes__content_infos').innerText = infos.innerText
        document.querySelector('.informacoes__content_desc').innerText = descricao.innerText
    }


    sair.addEventListener('click', exit)
    imgs.forEach(img => img.addEventListener('click', handleClick, { capture: true }))
} 