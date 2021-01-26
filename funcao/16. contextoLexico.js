const Valor = 'Global'

function minhaFuncao(){
    console.log(Valor)
}

function exec(){
    const Valor = 'Local'

    minhaFuncao()
}

exec()