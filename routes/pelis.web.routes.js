const controllers = require('../controllers/pelis.web.controllers');
const router = require('express').Router();

router.get('/', controllers.getHome);
router.get('/film/:title', controllers.getFilm); // Falta poner una concreta
router.post('/film/', controllers.searchFilm);

module.exports = router;