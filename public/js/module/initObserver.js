export default function observer(callback, target, configUser) {
    const nomeAlvo = target != undefined ? target : '.carrinho__content'

    const alvo = document.querySelector(nomeAlvo)
    const config = configUser != undefined ? configUser : {attributes: false, childList: true, subtree: false}

    const observer = new MutationObserver(callback)
    observer.observe(alvo, config)
}