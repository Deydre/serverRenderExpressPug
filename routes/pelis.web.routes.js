const controllers = require('../controllers/pelis.web.controllers');
const router = require('express').Router();

router.get('/', controllers.getHome);
router.get('/film/:title', controllers.getFilm); // get por params
router.post('/film/', controllers.searchFilm); // post por form

module.exports = router;