require('dotenv').config();
let apiKey = process.env.API_KEY;

// Llamada a la API
async function getFilmFromAPI(title) {
    try {
        // Realizar la solicitud a la API
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Si la respuesta es exitosa, procesar los datos
        const data = await response.json();
        //data.results nos devuelve un array de objetos, que habrá que pintar en el DOM
        return [data.Title, data.Year, data.Released, data.Director];

    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
};


// READ con GET
const getHome = (req, res) => {
        try {
            res.status(200).render('home.pug');
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// // Probar API
// getFilmFromAPI("inception").then(resultado => {
//     console.log(resultado)
// })


const getFilm = async (req, res) => {
    try {
        let result = await getFilmFromAPI(req.body.title);
        console.log(result.Director);
        res.status(200).render('film.pug', { 
            title: result.Title,
            director: result.Director,
            description: result.Description
        });
        res.redirect('/film');
        
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}


module.exports = {
    getHome,
    getFilm
}