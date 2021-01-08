function soma(){
    let soma = 0

    for(i in arguments){

        soma += arguments[i]
    }

    return soma
}

console.log(soma(0))
console.log(soma(1))
console.log(soma(5))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('Olá ', 'Tudo ', 'Bem ?'))