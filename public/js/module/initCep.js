export default function iniCep() {
    const inputCep = document.querySelector('#CEP') 

    async function getLocal(cepPessoa) {
        const cep = await fetch(`https://viacep.com.br/ws/${cepPessoa}/json/`)
        const dados = await cep.json()

        adicionarValores(dados)
    }

    function adicionarValores(dados) {
        const rua = document.querySelector('#rua')
        const bairro = document.querySelector('#bairro')

        if(!dados.erro) {
            rua.value = dados.logradouro
            bairro.value = dados.bairro
            inputCep.classList.remove('cep-error')
        } else 
            inputCep.classList.add('cep-error')
    }

    function cepPesquisar() {
        if(inputCep.value.length == 8)
            getLocal(inputCep.value)
        else
            inputCep.classList.add('cep-error')
    }

    inputCep.addEventListener('change', cepPesquisar)
}