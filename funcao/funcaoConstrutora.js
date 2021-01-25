function Carro(velocidadeMaxima = 200, delta = 5){

    //atributo privado

    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo pulbico

    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()

console.log(uno.getvelocidadeAtual())

const Ferrari = new Carro