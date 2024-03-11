const dataToCards = require("./dataToCards");
const axios = require("axios");

async function getMovies() {
  try {
    const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
    dataToCards(data.data)
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion a la api.")
    console.log(error.message)
  }
}

/*   $.get("https://students-api.2.us-1.fl0.io/movies", (data) =>
    dataToCards(data)
  ); */

  module.exports = getMovies;
