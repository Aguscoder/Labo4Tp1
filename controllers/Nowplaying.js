const axios = require('axios');
const { request, response} = require('express');

const url = 'https://api.themoviedb.org';

const getNewPlaying = (req = request, res = response) => {        
    const api = process.env.API_KEY;

    axios.get(`${url}/3/movie/now_playing?api_key=${api}`)
        .then(({ status, data, statusText }) => {
            // Resultados de Busqueda
            console.log({ status, data, statusText });
            const {results, page } = data;
            res.status(200).json({
                page,
                status,
                statusText,
                results,
            });
        })
        .catch((error)=>{

            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error Inesperado'
            });
        });        
}

const getFiltroNewPlaying = (req = request, res = response) => {        
    const api = process.env.API_KEY;
    const {page, language } = req.query;
    let query_params = '';
    console.log(page, language);

    //query_params para filtrado de peliculas
    query_params += page && `&page=${page}`;
    query_params += language && `&language=${language}`;

    axios.get(`${url}/3/movie/now_playing?api_key=${api}${query_params}`)
        .then(({ status, data, statusText }) => {
            // Resultados de Busqueda
            console.log({ status, data, statusText });
            const {results, page } = data;
            res.status(200).json({
                page,
                status,
                statusText,
                results,         
            });
        })
        .catch((error)=>{

            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error Inesperado'
            });
        });        
}

const getIdPeliculaNewPlaying = (req = request, res = response) => {        
    const api = process.env.API_KEY;

    const { idPelicula } = req.params;
    
    axios.get(`${url}/3/movie/${idPelicula}?api_key=${api}`)
        .then(({ status, data, statusText }) => {
            // Resultados de Busqueda
            console.log({ status, data, statusText });

            res.status(200).json({
                status,
                statusText,
                data,                
          
            });
        })
        .catch((error)=>{

            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error Inesperado'
            });
        });        
}

module.exports = {
    getNewPlaying,
    getFiltroNewPlaying,
    getIdPeliculaNewPlaying,
};