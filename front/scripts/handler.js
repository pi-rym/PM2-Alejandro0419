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
  try {
    const formCreate = document.getElementById('submitMovie');
    const formData = new FormData(formCreate);
    const data = await axios.post('http://localhost:3000/movies', formData);
    console.log("Data del form enviada: " + data);
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion al servidor. - postMovie")
    console.log(error.message)
  }
}

  module.exports = {getMovies, postMovie};
