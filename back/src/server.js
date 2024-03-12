const express = require("express");
const router = require("./routes/index")

const server = express(); // nuestro servidor vive aca

server.use(router)

module.exports = server;