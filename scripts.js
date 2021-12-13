//um metodo para ler propriedades de um objeto 

const filme = {
    titulo: '- homem-aranha',
    ano: '- 2012',
    diretor: '- isabel',
    ator: '- tom'
}
exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}