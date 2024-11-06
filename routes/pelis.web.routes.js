const controllers = require('../controllers/pelis.web.controllers');
const router = require('express').Router();

router.get('/home', controllers.getHome);
router.get('/film', controllers.getFilm); // Falta poner una concreta

module.exports = router;