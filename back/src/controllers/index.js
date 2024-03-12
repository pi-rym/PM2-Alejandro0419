//En este modulo van las funciones que establece la LOGICA DEL NEGOCIO de cada una de las Rutas
//Que se va a hacer cuando se reciba una solicitud a tal ruta

const testController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud");
};

const moviesController = (req, res)=>{
    res.status(200).send("Próximamente estarán disponibles los datos de peliculas...");
}

module.exports = {testController, moviesController};