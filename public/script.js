require('dotenv').config();
let apiKey = process.env.API_KEY;

async function getFilm(title) {
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

// // Probar API
// getFilm("inception").then(resultado => {
//     console.log(resultado)
// })