const server = require("./src/server");

// para recibir solicitudes, el server tiene el metodo listen
//paso como argumento el puerto que va a revisar y una funcion callback que se ejecuta cuando se logra comunicar el server.
server.listen(3000, ()=> {
    console.log("El servidor esta escuchando el puerto 3000")
});