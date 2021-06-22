export default function initMenu() {
    const menuHanburg = document.querySelector('[data-menu="menu__icon"]')
    const events = ['click', 'ontouchstart']
    
    function ativarMenu() {
        const menuMobile = document.querySelector('[data-menu="menu__nav_mobile"]')
        menuMobile.classList.toggle('menu__nav_mobile-ativo')
    }

    events.forEach(evento => menuHanburg.addEventListener(evento, ativarMenu))
}