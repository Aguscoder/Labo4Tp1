const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.port = process.env.PORT || 3000;
        
        this.app = express();

        //1° en Orden
        this.middleware();
        
        //2° en orden
        this.routers();
    }

    middleware(){
        
       
        this.app.use(cors());
        //this.app.use(express.static('public'));
        //una vez configurada esta seccion publica, NO es posible usar esta ruta
        this.app.use(express.static('public'));
    
    }


    routers(){
        this.app.use('/api/v1/peliculas', require('../routes/Discover'));
        this.app.use('/api/v1/peliculas', require('../routes/Nowplaying')); 
        this.app.use('/api/v1/peliculas', require('../routes/topRated')); 
        

        this.app.all('*', (req, res) =>{
            res.status(404).json({message:'404 Page Not Found'})
        }); 
    
    }
 
    listen() {
        this.app.listen(this.port, () => {
            console.log(` app listening/escuchando on port ${this.port}`);
        });        
    }

}

module.exports = Server;