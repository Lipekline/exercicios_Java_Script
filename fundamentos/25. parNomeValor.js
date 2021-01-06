//par nome/valor

const saudacao = 'opa' //contexto léxico 1

function exec () {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de nome/valor (chave/valor)

const Cliente = {
    nome: 'Luis',
    idade: 20,
    peso: 70,
    endereco: {
        logradouro: 'rua legal',
        numero: 123,
    }

}

console.log(saudacao)
console.log(exec())
console.log(Cliente)