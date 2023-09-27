const axios = require('axios');
const { request, response} = require('express');

const url = 'https://api.themoviedb.org';

const getDiscover = (req = request, res = response) => {        
    const api = process.env.API_KEY;

    axios.get(`${url}/3/discover/movie?api_key=${api}`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            const {results, page } = data;
            res.status(200).json({
                status,
                results,
                page,
                statusText,                
            });
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}

const getFiltroDiscover = (req = request, res = response) => {        
    const api = process.env.API_KEY;
    const {page, language } = req.query;
    let query_params = '';
    console.log(page, language);

    query_params += page && `&page=${page}`;
    query_params += language && `&language=${language}`;

    axios.get(`${url}/3/movie/popular?api_key=${api}${query_params}`)
        .then(({ status, data, statusText }) => {
           
            console.log({ status, data, statusText });
            const {results, page } = data;
            res.status(200).json({
                page,
                status,
                results,
                statusText,                
            });
        })
        .catch((error)=>{

            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}

const getIdPelicula = (req = request, res = response) => {        
    const api = process.env.API_KEY;

    const { idPelicula } = req.params;
    
    axios.get(`${url}/3/movie/${idPelicula}?api_key=${api}`)
        .then(({ status, data, statusText }) => {
          
            console.log({ status, data, statusText });
            
            res.status(200).json({
                status,
                data,                
                statusText,                
            });
        })
        .catch((error)=>{
         
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}




module.exports = {
    getDiscover,
    getIdPelicula,
    getFiltroDiscover
    
};