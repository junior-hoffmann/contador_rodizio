let btnSalgada = document.getElementById('btn-salgada')
let btnDoce = document.getElementById('btn-doce')
let btnResetar = document.getElementById('btn-resetar')
let placarSalgada = document.getElementById('placar-salgada')
let placarDoce = document.getElementById('placar-doce')

let qtdSalgadas = 0
let qtdDoces = 0

btnSalgada.addEventListener('click', ()=>{
    qtdSalgadas++
    placarSalgada.innerText = qtdSalgadas
})

btnDoce.addEventListener('click', ()=>{
    qtdDoces++
    placarDoce.innerText = qtdDoces
})