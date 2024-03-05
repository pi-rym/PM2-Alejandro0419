console.log(tempData);

function objToCard(objPelicula){
    const {title, year, director, duration, rate, poster} = objPelicula

    const imagen = document.createElement('img')
    const titulo = document.createElement('h2')
    const puntuacion = document.createElement('p')
    const boton = document.createElement('button')

    imagen.src = poster;
    titulo.textContent = title;
    puntuacion.textContent = 'Puntuacion: ' + rate;
    boton.textContent ='Ver pelicula';

    imagen.classList.add('movieImg');
    titulo.classList.add('movieTitle');
    puntuacion.classList.add('movieDesc');
    boton.classList.add('movieBtn');
    
    const divCard = document.createElement('div');
    divCard.appendChild(imagen);
    divCard.appendChild(titulo);
    divCard.appendChild(puntuacion);
    divCard.appendChild(boton)
    divCard.classList.add('card')

    return divCard;
}

const contenedor = document.getElementById('dealer1')
const listaDeObj = tempData;
const listaCards = listaDeObj.map(objToCard);

listaCards.forEach(card =>{
    contenedor.appendChild(card);
})