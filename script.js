function inserir(num) {
    document.getElementById('resultado').innerHTML += num
}

function apagarUltimo() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function apagarTudo(nada) {
    document.getElementById('resultado').innerHTML = nada
}

function calcular() {
    let valor = document.getElementById('resultado').innerHTML
    if(valor) {
        document.getElementById('resultado').innerHTML = eval(valor)
    } else {
        document.getElementById('resultado').innerHTML = 'Insira Valores'
    }
    

}