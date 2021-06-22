export default function initPassar() {
    const passarBtn = document.querySelectorAll('.receitas__passar')

    function handleClick({target}) {
        if(target.getAttribute('data-passar') == 'esquerda') 
            target.nextElementSibling.scrollBy({top: 0, left: -300, behavior: 'smooth'})
        else
            target.previousElementSibling.scrollBy({top: 0, left: 300, behavior: 'smooth'})
    }   


    passarBtn.forEach(btn => btn.addEventListener('click', handleClick))
}