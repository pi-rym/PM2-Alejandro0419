const {getMovies, postMovie} = require('./handler')

getMovies()


const btnSubmit = document.getElementById('submitMoviebtn');

btnSubmit.addEventListener('click', postMovie)
/* 
// en un dorucmento de js para create movie o submit movie:

getelementbyid de el boton submit

boton addEventListener que llame a la funcion asyncrona postMovie del handler 

*/