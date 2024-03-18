require('dotenv').config();
const server = require("./src/server");
const dbCon = require("./src/config/dbCon");

const PORT = process.env.PORT

dbCon().then((res)=>{
    server.listen(PORT, ()=> {
        console.log("El servidor esta escuchando el puerto: " + PORT)
    });

})
.catch((err) => { 
    console.log("Error al establecer la conexion a la BDD")
});

// para recibir solicitudes, el server tiene el metodo listen
//paso como argumento el puerto que va a revisar y una funcion callback que se ejecuta cuando se logra comunicar el server.