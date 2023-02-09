import express, { Application } from 'express';
//exportacion e rutas
import userRoutes from '../routes/usuario';
import insumoRoutes from '../routes/insumo';
import maquinariaRoutes from '../routes/maquinaria';
import enfermedadRoutes from '../routes/enfermedad';
import personaRoutes from '../routes/persona';
import terrenoRoutes from '../routes/terreno';
import fincaRoutes from '../routes/finca';
import listInsumoRoutes from '../routes/listinsumo';
import listPersonalRoutes from '../routes/listpersonal';
import taskRoutes from '../routes/task';
import listtaskRoutes from '../routes/listtask';
import listMaquinariasRoutes from '../routes/listmaquinarias';
import historialRoutes from '../routes/historial';
import cronogramaRoutes from '../routes/cronograma';
import dwreRoutes from '../routes/dwre';
import listCultivoRoute from '../routes/listcultivo';


import cors from 'cors';
import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        usuarios: '/api/usuarios',
        enfermedad: '/api/enfermedades',
        insumo: '/api/insumos',
        maquinaria: '/api/maquinarias',
        terreno: '/api/terrenos',
        persona: '/api/personas',
        finca: '/api/fincas',
        listInsumo: '/api/listInsumo',
        listPersona: '/api/listPersonal',
        task: '/api/task',
        listMaquinarias: '/api/listmaquinarias',
        historial: '/api/historial',
        cronograma: '/api/cronograma',
        dwre: '/api/dwre',
        listtask: '/api/listtask',
        listcultivo: '/api/listcultivos'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Database online');

        } catch (e) {
            throw new Error();
        }

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes),
            this.app.use(this.apiPaths.enfermedad, enfermedadRoutes),
            this.app.use(this.apiPaths.insumo, insumoRoutes),
            this.app.use(this.apiPaths.maquinaria, maquinariaRoutes),
            this.app.use(this.apiPaths.terreno, terrenoRoutes),
            this.app.use(this.apiPaths.persona, personaRoutes),
            this.app.use(this.apiPaths.finca, fincaRoutes),
            this.app.use(this.apiPaths.listInsumo, listInsumoRoutes),
            this.app.use(this.apiPaths.listPersona, listPersonalRoutes),
            this.app.use(this.apiPaths.task, taskRoutes),
            this.app.use(this.apiPaths.listMaquinarias, listMaquinariasRoutes),
            this.app.use(this.apiPaths.historial, historialRoutes),
            this.app.use(this.apiPaths.cronograma, cronogramaRoutes),
            this.app.use(this.apiPaths.dwre, dwreRoutes),
            this.app.use(this.apiPaths.listtask, listtaskRoutes),
            this.app.use(this.apiPaths.listcultivo, listCultivoRoute)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;