export default function initScrollSuave() {
    const li = document.querySelector('a[href="#sobre"]')

    function handleClick(event) {
        const local = this.getAttribute('href')
        const sectionDistancia = document.querySelector(local).offsetTop
        event.preventDefault()

        scrollTo({
            top: sectionDistancia,
            left: 0,
            behavior: 'smooth'
        })
    }

    li.addEventListener('click', handleClick)
}