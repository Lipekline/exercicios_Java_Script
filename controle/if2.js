function teste(numero){
    if(numero > 7)
    console.log(numero)
    console.log('Final')
}

 teste(6)
 teste(8)

function teste2(numero){
    if(numero > 7); { //ponto e virgula está tirando a sentença de chaves do if
        console.log(numero)
    }
}


teste2(8)
teste2(6)