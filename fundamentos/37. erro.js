function tratarErroELancar(erro) {

   // throw new Error ('Ops !! Ocorreu um erro.')
   //  throw 10
   // throw true 
   throw 'Ocorreu um erro !!'
}


function imprimirNome(obj){

    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }

}

const obj = { nome: 'Roberto'}

imprimirNome(obj)