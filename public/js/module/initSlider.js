export default function initReceitas() {
    const sliders = document.querySelectorAll('[data-slider="container"] .slider__content')
    const contentControl = document.querySelector('[data-slider="container__controle"]')
    let i = 1

    function passSlider() {
        const spans = contentControl.querySelectorAll('span')
        sliders.forEach(slider => slider.classList.remove('slider__content-ativo'))

        if(i <= 4) 
            sliders[i].classList.add('slider__content-ativo')
        else {
            i = 0
            sliders[i].classList.add('slider__content-ativo')
        }

        spans.forEach(span => span.classList.remove('slider__controle-ativo'))
        spans[i].classList.add('slider__controle-ativo')
        i++
    }
    
    function passSliderClick(event, index) {
        event.target.classList.add('slider__controle-ativo')
        i = index

        passSlider()
    }

    function insertSpan() {
        for(i = 0; i < sliders.length; i++) {
            const span = document.createElement('span')
            contentControl.appendChild(span)
        }

        const spans = contentControl.querySelectorAll('span')

        spans.forEach((span, index) => {
            span.addEventListener('click', function(event) {
                spans.forEach(span => span.classList.remove('slider__controle-ativo'))
                passSliderClick(event, index)
            })
        })
    }

    insertSpan()
    passSlider()
    setInterval(passSlider, 3000)
}  