const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.error("Error al obtener las películas:", error);
      throw error;
    }
  },
  createMovie: async (movie) => {
    try {
      const newMovie = await Movie.create(movie);
      return newMovie;
    } catch (error) {
      console.error("Error al crear pelicula:", error);
      throw error;
    }
  },
};
