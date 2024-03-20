const validateData = (req, res, next)=>{
    console.log("Se esta ejecutando el validador de datos")
    const { title, year, director, duration, genre, rate, poster } = req.body;
    

    if (!title || !year || !director || !duration || !genre || !rate || !poster ) {
        return res.status(400).json({
            error:"Hay un error en la informacion. Faltan campos."
        })
    }
    if(year<1894 || year>2050){
        return res.status(400).json({
            error:"Hay un error en la informacion. Ingrese un año valido."
        })
    }
    if(rate<0 || rate>10){
        return res.status(400).json({
            error:"Hay un error en la informacion. Ingrese una puntuacion valida."
        })
    }
    if(genre.length===0){
        return res.status(400).json({
            error:"Hay un error en la informacion. Ingrese los generos de la pelicula."
        })
    }
    else{
        next();
    }
}


/* 
{
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "director": "Irvin Kershner",
    "duration": "2h 4min",
    "genre": ["Action", "Adventure", "Fantasy"],
    "rate": 8.7,
    "poster":
      "https://www.imdb.com/title/tt0080684/mediaviewer/rm3097064448/"
  }
*/

module.exports={validateData};