import express, { Application } from 'express';
import cors from 'cors';

import routesRegistro from '../routes/registro';
import routesBanco from '../routes/banco';
import { Registro } from './registro';
import { Banco } from './banco';

class sever {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    async dbConnect() {
        try {
            await Registro.sync();
            await Banco.sync();

        } catch (error) {
            console.log("", error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.use('/api/registro', routesRegistro);
        this.app.use('/api/banco', routesBanco);
        
    }
    
    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        
    }

}

export default sever;