const renderMovies = require("./renderMovies")

function dataToCards (data){
    const contenedor = document.getElementById('dealer1')
    const listaDeObj = data;
    const listaCards = listaDeObj.map(renderMovies);
    listaCards.forEach(card =>{
        contenedor.appendChild(card);
    });
}
module.exports = (dataToCards);