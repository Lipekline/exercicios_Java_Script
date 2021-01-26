//Closure é um escopo criado quando a função é declarada
//esse escopo permite a função criar e manipular variaveis externar a função

//contexto léxico em ação:

const x = 'Global'

function fora(){
    const x = 'Local'

    function dentro(){
        return x
    }

    return dentro 
}

const minhaFuncao = fora()

console.log(minhaFuncao())