const { Router } = require('express');
const { getDiscover, getFiltroDiscover, getIdPelicula } = require('../controllers/Discover');

const rutas = Router();

rutas.get('/Discover', getDiscover);
rutas.get('/Discover_filtro', getFiltroDiscover);
rutas.get('/Discover/:idPelicula', getIdPelicula);

module.exports = rutas;