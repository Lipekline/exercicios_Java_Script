function area(largura, altura){

    const area = largura * altura

    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // passando area menor que 20
console.log(area(5, 5)) // passando area maior que 20
console.log(area(2)) // passando apenas 1 valor
console.log(area()) // passando nenhum valor
console.log(area(4, 5, 6, 2, 3, 9)) // passando valores além do permitido