
var tela = document.querySelector("#resultado")
var valor = ""


/*
----------------------------------------
        BOTOES NUMERICOS, OPERACIONAIS E PONTO
----------------------------------------
*/

function botao(valorBtn) {
    valor += valorBtn
    tela.innerHTML = valor
    console.log(valor)
}

/*
----------------------------------------
        BOTAO IGUAL =
----------------------------------------
*/

function resultado() {
    solucao = eval(valor)
    tela.innerHTML = solucao
}

/*
----------------------------------------
        BOTAO APAGAR ULTIMO DIGITO <=
----------------------------------------
*/

function apagarUltimoDigito() {
    valor = valor.substring(0, valor.length - 1)
    tela.innerHTML = valor
}

/*
----------------------------------------
        BOTAO AC
----------------------------------------
*/

function apagarTudo() {
    valor = ""
    tela.innerHTML = valor
}

/*
----------------------------------------
        BOTAO FATORIAL
----------------------------------------
*/

function fatorial() {

    if (valor < 0) {
        valor = -1
        tela.innerHTML = valor
    }

    else if (valor == 0) {
        valor = 1
        tela.innerHTML = valor
    }

    else {
        for (var i = valor - 1; i > 0; i--) {
            valor *= i
        }
        tela.innerHTML = valor
    }
}

