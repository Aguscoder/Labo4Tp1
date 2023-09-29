const { Router } = require('express');
const { getNewPlaying, getFiltroNewPlaying, getIdPeliculaNewPlaying } = require('../controllers/NowPlaying');

const rutas = Router();

rutas.get('/NowPlaying',getNewPlaying);
rutas.get('/Filtro_NowPlaying', getFiltroNewPlaying);
rutas.get('/NowPlaying/:idPelicula', getIdPeliculaNewPlaying);

module.exports = rutas;