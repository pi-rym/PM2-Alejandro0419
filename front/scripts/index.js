function objToCard(movie){
    const divCard = document.createElement('div');
    divCard.classList.add('card')
    divCard.classList.add('bg-dark-subtle')

    divCard.innerHTML =` <img src="${movie.poster}" alt="${movie.title}" class="card-img-top">
    <div class="card-body bg-dark-subtle">
    <h2 class="movieTitle m-3">${movie.title} (${movie.year})</h2>
    <p class="card-text"><strong>Director: </strong> ${movie.director}</p>
    <p class="card-text"><strong>Duracion: </strong> ${movie.duration}</p>
    <p class="card-text"><strong>Género: </strong> ${movie.genre.join(', ')}</p>
    <p class="card-text"><strong>Rate: </strong> ${movie.rate}</p>
    </div>
    `
    return divCard;
}

$.get("https://students-api.2.us-1.fl0.io/movies", (data)=>dataToCards(data))

function dataToCards (data){
    const contenedor = document.getElementById('dealer1')
    const listaDeObj = data;
    const listaCards = listaDeObj.map(objToCard);
    listaCards.forEach(card =>{
        contenedor.appendChild(card);
    });
}
