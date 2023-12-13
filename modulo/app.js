var tonypizzariaApi = require('../tonypizzaria.js')

const categoria = function(){

    let listaCategoria = tonypizzariaApi.tonyCategorias.categorias

    listaCatgarry = []
    listacatgjson = {}

    listacatgjson.listaCategoria = listaCatgarry

    listaCategoria.forEach(function(categorias){
        listaCatgarry.push(categorias)
    })

    return listacatgjson
}

console.log(categoria())