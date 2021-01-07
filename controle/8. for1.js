contador = 1

while (contador <= 10 ){
    console.log('contador = ', contador)
    contador++
}

for (let i =1; i <= 10; i++){
    console.log('i = ', i)

}

const notas = [6, 7, 8, 9, 10]

for (let i = 0; i < notas.length; i++){         // ordem crescente
    console.log('Notas crescente = ', notas[i])
}


for( let i = (notas.length) -1; i >= 0; i--){  //ordem decrescente

    console.log('Notas descrescente = ', notas[i])
}