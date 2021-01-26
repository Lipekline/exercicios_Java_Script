//factory de criação de varios objetos

function criarProduto(nome, preco, desconto = 0.1){

    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('leite', 10))
console.log(criarProduto('carne', 30))