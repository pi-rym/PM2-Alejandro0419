//Aca van definidas las rutas a traves de las cuales nos podemos comunicar
//Ej : Tener definida las solicitud a GET/usuarios

const { Router } = require("express");
const {testController} = require("../controllers/index")
const moviesRouter = require("./moviesRouter")

const router = Router();

router.get("/", testController);

//direccionamos requests para movies al router de movies
router.use("/movies", moviesRouter)

module.exports = router;