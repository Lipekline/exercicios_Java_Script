class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){

        console.log('Meu nome é: ', this.nome)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

const Pessoa = nome => {
    return {
        falar: () => console.log('meu nome é: ', nome)
    }
}

const p2 = Pessoa('joao')

p2.falar