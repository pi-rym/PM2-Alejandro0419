//Aca van definidas las rutas a traves de las cuales nos podemos comunicar
//Ej : Tener definida las solicitud a GET/usuarios

const { Router } = require("express");
const {testController} = require("../controllers/index")
const {moviesController} = require("../controllers/index")

const router = Router();

router.get("/", testController);

router.get("/movies", moviesController)

module.exports = router;