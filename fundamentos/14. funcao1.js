//função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //tanto numerico
imprimirSoma("ola ", "tudo bem ?") //quando string


//função com retorno

function soma (a, b = 0){

    return a + b
}

soma(2, 3) // não exibe nada pois a função apenas retorna a soma
console.log(soma(2, 3))
console.log(soma(2)) // como o valor de b foi tratado na criação da função o retorno não será NaN

