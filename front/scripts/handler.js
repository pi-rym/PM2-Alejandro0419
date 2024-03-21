const dataToCards = require("./dataToCards");
const axios = require("axios");

async function getMovies() {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    dataToCards(data.data)
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion al servidor. - datatocards")
    console.log(error.message)
  }
}

async function postMovie(event) {
  event.preventDefault();
  
  const formCreate = document.getElementById('submitMovie');
  const dataForm = new FormData(formCreate);
  console.log(dataForm);
  
  const movieData = {
    title: dataForm.get('title'),
    year: dataForm.get('year'),
    director: dataForm.get('director'),
    duration: dataForm.get('duration'),
    genre: dataForm.getAll('genre'),
    rate: dataForm.get('rate'),
    poster: dataForm.get('poster'),
  };

  // Validación de campos
  if(![movieData.title, movieData.year, movieData.director, movieData.duration, movieData.genre, movieData.rate, movieData.poster].every(Boolean))  alert('Hay campos incompletos.')

  try {
    const data = await axios.post('http://localhost:3000/movies', movieData);
    console.log("Data del form enviada: " + data);
    alert("Pelicula agregada correctamente.");

  } catch (error) {
    console.log("Ha ocurrido un error en la conexion al servidor. - postMovie")
    console.log(error.message)
  }
}

  module.exports = {getMovies, postMovie};
