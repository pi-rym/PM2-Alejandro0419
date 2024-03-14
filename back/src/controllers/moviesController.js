const moviesService = require("../services/moviesService")

module.exports = {
    //Realiza a tu controlador las modificaciones necesarias para que hacer que ejecute la función del servicio que le permite obtener todas las películas.

    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error:"Error interno del servidor"
            })
        }
    },
    createMovie: async (req,res) => {
        const {title,year,director,duration,genre,rate,poster} = req.body;
        await moviesService.createMovie(title,year,director,duration,genre,rate,poster);
        res.status(201).json({
            message: "Pelicula creada correctamente"
        })
    }
};