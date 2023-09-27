const axios = require('axios')
const { request, response} = require('express');
const api_token = process.env.API_KEY;

const getPeliculas = (req = request, res = response) => {  
    // Listado peliculas
   

    const url = `https://api.themoviedb.org/3/discover/movie`;
    const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_token}`
      }
    };
    
    axios.get(url, options)
      .then((resp) => {
            res.status(200).json(resp.data)
        })
        .catch((err) => {
            res.status(400).json(error(400, `Bad Request ${err}`))
        })
   
}

const getPelicula = (req = request, res = response) => {  
    // Obtener pelicula por ID 

    const {id} = req.params;

    const url = `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`;
    const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_token}`
      }
    };
    
    axios.get(url, options)
      .then((resp) => {
            res.status(200).json(resp.data)
        })
        .catch((err) => {
            res.status(400).json(error(400, `Bad Request ${err}`))
        })



  
}


const getEstrenos = (req = request, res = response) => {
    res.json({name: 'Estrenos'});
}

const getActores = (req = request, res = response) => {
    res.json({name: 'Actores'});
}

const getOrigenNombre = (req = request, res = response) => {
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://api.nationalize.io/?name=${name}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                name
            });
        })
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        

    
}

const error = (status, error) => ({
    status: status,
    error: error,
})


module.exports = {
    getPeliculas,
    getEstrenos,
    getActores,
    getPelicula,
    getOrigenNombre
};