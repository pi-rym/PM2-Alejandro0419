const moviesService = require("../services/moviesService")

module.exports = {
    //Realiza a tu controlador las modificaciones necesarias para que hacer que ejecute la función del servicio que le permite obtener todas las películas.

    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error:"Error interno del servidor - Llamado a movies"
            })
        }
    },
    createMovie: async (req,res) => {
        try {
            const movie = req.body;
            const newMovie = await moviesService.createMovie(movie);
            res.status(201).json(newMovie);
            
        } catch (error) {
            res.status(500).json({
                error:"Error interno del servidor - Creacion de movie"
            })
        }
    }
};