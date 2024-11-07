require('dotenv').config();
let apiKey = process.env.API_KEY;

// READ con GET
const getHome = (req, res) => {
    try {
        res.status(200).render('home.pug');
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const getFilm = async (req, res) => {
    try {
        // Realizar la solicitud a la API
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${req.params.title}`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Si la respuesta es exitosa, procesar los datos
        const data = await response.json();
        let img;
        data.Poster == "N/A" ? img = "/media/imgNotFound.jpg" : img = data.Poster;
        //data.results nos devuelve un array de objetos, que habrá que pintar en el DOM
        res.status(200).render('film.pug', {
            title: data.Title,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            genre: data.Genre,
            src: img,
            awards: data.Awards
        });

    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const searchFilm = async (req, res) => {
    try {
        // Realizar la solicitud a la API
        const title = req.body.title;
        // validar si el título está vacío o no y tmb en script.js en front
        res.redirect(`/film/${title}`); // Como window.location del front
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    getHome,
    getFilm,
    searchFilm
}