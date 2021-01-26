console.log(soma(3, 4))

// console.log(subtracao(4, 3)) da erro pois diz que a variavel de armazenamento ainda nao foi declarada
//console.log(mult(4, 3))  da erro pois diz que a variavel de armazenamento ainda nao foi declarada

//function declaration

function soma(x, y){
    return x + y
}


//function expression

const subtracao = function (x, y){
    return x - y
}

console.log(subtracao(4, 3))


//  named function expression

const mult = function mult(x, y){

    return x + y
}

console.log(mult(4, 3))