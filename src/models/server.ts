import express, { Application } from 'express';
import cors from 'cors';

import routesRegistro from '../routes/registro';
import { Registro } from './registro';

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
        
    }

    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        
    }

}

export default sever;