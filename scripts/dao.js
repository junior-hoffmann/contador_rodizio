window.onload = function () {
    carregarBD()
}

function carregarBD() {
    try {
        let objeto = JSON.parse(localStorage.getItem('rodizio'))
        qtdSalgadas = objeto['salgadas']
        qtdDoces = objeto['doces']
        atualizarQuantidades()
    } catch (e) { }
}

function salvarBD() {
    let objeto = {
        'salgadas': qtdSalgadas,
        'doces': qtdDoces
    }
    localStorage.setItem('rodizio', JSON.stringify(objeto))
}

function zerarBD(){
    localStorage.clear()
    qtdSalgadas = 0
    qtdDoces = 0
}