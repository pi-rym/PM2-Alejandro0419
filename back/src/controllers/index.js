//En este modulo van las funciones que establece la LOGICA DEL NEGOCIO de cada una de las Rutas
//Que se va a hacer cuando se reciba una solicitud a tal ruta
//El controller lo define, y llama a las funciones que se tienen que ejecutar en cada caso

const testController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud");
};



module.exports = {testController};