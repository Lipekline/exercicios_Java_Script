let dobro = function (a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a

}

dobro = a => 2 * a // return implicido 

console.log(dobro(Math.PI))

let ola = () => {
    return 'Olá'
}

console.log(ola())