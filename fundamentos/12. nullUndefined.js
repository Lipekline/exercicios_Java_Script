let valor //variavel não inicizalizada
console.log (valor)

valor = null //variavel inicializada porem sem valor proprio e sem apontar para algum valor
console.log(valor)

//console.log(valor.toString()) //erro! não da pra acessar o toString de uma variavel nula

const produto = {}
console.log(produto.preco)

console.log(produto)

produto.preco = 3.50

console.log(produto)
console.log(produto.preco)

produto.preco = undefined 

console.log(produto.preco)
console.log(!!produto.preco) //convertendo pra boolean
console.log(produto)

produto.preco = null 
console.log(produto.preco)
console.log(!!produto.preco) //tanto undefined quando null sempre será falso

