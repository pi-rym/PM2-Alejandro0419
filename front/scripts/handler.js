const dataToCards = require("./dataToCards");
const axios = require("axios");

async function getMovies() {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    dataToCards(data.data)
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion al servidor.")
    console.log(error.message)
  }
}

async function postMovie() {
  try {
    const {data} = await axios.post('http://localhost:3000/movies', document.querySelector('#formCreateMovie'))
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion al servidor.")
    console.log(error.message)
  }
}

  module.exports = {getMovies, postMovie};
