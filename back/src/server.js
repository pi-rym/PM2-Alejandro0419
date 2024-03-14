const express = require("express");
const router = require("./routes/index")
const morgan = require("morgan")
const cors = require("cors")

const server = express(); // nuestro servidor vive aca

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use((req, res, next)=>{
    console.log("Estamos pasando por el middleware propio");
    next();
})

server.use(router)

module.exports = server;