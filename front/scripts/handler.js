const dataToCards = require("./dataToCards");
const axios = require("axios");

async function getMovies() {
  try {
    const data = await axios.get("http/localhost/3000/movies");
    dataToCards(data.data)
  } catch (error) {
    console.log("Ha ocurrido un error en la conexion a la api.")
    console.log(error.message)
  }
}
/* 
Promesas:

const getFilms = ()=> {
  axios.get("https://students-api.up.railway.app/movies");
  .then( ( {data} ) => data.forEach(dataToCards))
}.catch((error)=> console.log(error.message))


Async Await
const getFilms = async ()=Z {
  try {
    const { data } = await axios.get
    console.log (data)
    data.forEach(renderfilms)
  }
  catch (error){
    console.log(error.message)
  }
}
*/

/*   $.get("https://students-api.2.us-1.fl0.io/movies", (data) =>
    dataToCards(data)
  ); 
*/

  module.exports = getMovies;
