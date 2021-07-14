let btns = document.querySelectorAll('input[type="button"]')
let resposta = document.getElementById('resposta')


for (let botao = 2; botao < 19; botao++){
    btns[botao].addEventListener('click', teste)
}

function teste(){
    resposta.value += this.value
}

function limpar_resposta(){
    resposta.value = ''
}

function apagar(){
    resposta.value = resposta.value.substr(0 , resposta.value.lenght -1)
}
function resultado(){
    resposta.value = eval(resposta.value)
}