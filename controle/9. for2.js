const notas = [6, 7, 8, 9, 10]

for (let i in notas){

    console.log('indice = ', i, 'nota = ', notas[i])
}


const pessoa =  {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for ( let atributo in pessoa){

    console.log(atributo, pessoa[atributo])
}