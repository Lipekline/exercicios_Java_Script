const peso1 = 1.0

const peso2 = Number ('2.0')

console.log (peso1, peso2)

console.log (Number.isInteger(peso1)) // verifica a tipagem da variavel
console.log (Number.isInteger(peso2)) // verifica a tipagem da variavel


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media)
console.log (media.toFixed(2)) //função que limita as casas decimais

console.log (media.toString()) // converte o valor de media em string
console.log (media.toString(2)) // colocando o numero 2 o valor se converte em binario
console.log (typeof media) // as funcoes nao altera a tipagem principal da variavel