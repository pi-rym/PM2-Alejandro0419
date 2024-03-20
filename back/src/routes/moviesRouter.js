const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const {validateData} = require("../middlewares/validateData");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", validateData, moviesController.createMovie);

module.exports = moviesRouter;