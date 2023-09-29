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
    const {year, region} = req.query;
    let query_params = '';
    console.log(year, region);

    query_params += year && `&year=${year}`;
    query_params += region && `&year=${region}`;
   

    axios.get(`${url}/3/discover/movie?api_key=${api}${query_params}`)
        .then(({ status, data, statusText }) => {
           
            console.log({ status, data, statusText });
            const { results, page } = data;
            res.status(200).json({
                page,
                results,    
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
//Id pelicula necesario  
const getIdPelicula = (req = request, res = response) => {        
    const api = process.env.API_KEY;

	console.log(req.params)

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
    getFiltroDiscover,
    getIdPelicula,

    
};