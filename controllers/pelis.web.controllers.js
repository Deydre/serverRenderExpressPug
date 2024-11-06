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

// // Probar API
// getFilmFromAPI("inception").then(resultado => {
//     console.log(resultado)
// })


const getFilm = async (req, res) => {
    try {
        // let result = await getFilmFromAPI(req.body.title);
        // console.log(result.Director);

        // Realizar la solicitud a la API
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${req.params.title}`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Si la respuesta es exitosa, procesar los datos
        const data = await response.json();
        //data.results nos devuelve un array de objetos, que habrá que pintar en el DOM
        console.log(data)
        res.status(200).render('film.pug', {
            title: data.Title,
            director: data.Director,
            plot: data.Plot,
            genre: data.Genre
        });
        // res.redirect('/film');

    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const searchFilm = async (req, res) => {
    try {
        // let result = await getFilmFromAPI(req.body.title);
        // console.log(result.Director);

        // Realizar la solicitud a la API
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${req.body.title}`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Si la respuesta es exitosa, procesar los datos
        const data = await response.json();
        //data.results nos devuelve un array de objetos, que habrá que pintar en el DOM

        res.status(200).render('film.pug', {
            title: data.Title,
            director: data.Director,
            description: data.Description
        });
        // res.redirect('/film');

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