const controllers = require('../controllers/pelis.web.controllers');
const router = require('express').Router();

router.get('/', controllers.getHome);
router.post('/film/:title', controllers.getFilm); // Falta poner una concreta

module.exports = router;