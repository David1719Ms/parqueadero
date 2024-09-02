import express, { json } from 'express';
import dbConnect from '../database/config.js';
import '../database/config.js';

import celdasRouter from '../routes/celdasRoutes.js';
import { getCelda, postCelda, putCelda, deleteCelda } from '../controllers/celdasController.js';

class Server {
    constructor(){
        this.app = express();
        this.listen();
        this.dbConnection(); 
        this.pathCeldas = '/api/celda';
        this.route();
    }

    async dbConnection(){  //llamar la coneccion de la base de datos
        await dbConnect();
    }
    route(){
        this.app.use(json())
        this.app.use(this.pathCeldas, celdasRouter)
        //////////////////////////////////////////////////
        this.app.get(this.pathCeldas, getCelda)
        this.app.post(this.pathCeldas, postCelda)
        this.app.put(this.pathCeldas, putCelda)
        this.app.delete(this.pathCeldas, deleteCelda)

    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('server is running')
        })
    }
}

export default Server; // exportar la clase server

