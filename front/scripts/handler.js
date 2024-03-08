const dataToCards = require("./dataToCards");

function getMovies() {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data) =>
    dataToCards(data)
  );
}

module.exports = getMovies;
