const {Router} = require ('express');
const {getTopRated,getTopRatedFiltro,getIdPelicula} = require('../controllers/topRated');



const rutas = Router();

rutas.get('/topRated', getTopRated);
rutas.get('/topRatedFiltro', getTopRatedFiltro);
rutas.get('/topRated/:idPelicula',getIdPelicula);


module.exports = rutas;

