require('dotenv').config()
const mongoose = require("mongoose");

const URI = process.env.URI

const dbCon = async () => {
    //Realizar conexion con bdd
    await mongoose.connect(
        URI
    );
};

module.exports = dbCon;