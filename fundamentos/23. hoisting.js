console.log('a = ', a) 
var a = 2               // efeito de subir a declaração do var e depois definir o valor
console.log('a = ', a)


function teste() {                 //em uma função ocorre o mesmo efeito

    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)

}

teste()