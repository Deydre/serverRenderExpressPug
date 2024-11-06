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


const getFilm = async (req, res) => {
    try {
        res.status(200).render('film.pug', {
            // poner aqui title, autor, description, ... 
        });
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