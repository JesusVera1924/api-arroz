import cors from 'cors';
import db from '../db/connection';
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
import listMaquinariasRoutes from '../routes/listmaquinarias';
import historialRoutes from '../routes/historial';

import planificacionRoute from '../routes/planificacion';
import detalleplanificacionRoute from '../routes/detalleplanificacion';
import tiposenfermedadesRoute from '../routes/tiposenfermedades';
import tiposgramineaRoute from '../routes/tiposgraminea';
import tiposinsumosRoute from '../routes/tiposinsumos';
import tiposmaquinariasRoute from '../routes/tiposmaquinarias';
import tiposplagasRoute from '../routes/tiposplagas';
import listTerrenosRoute from '../routes/listerrenos';
import proveedorRoute from '../routes/proveedores';


class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        usuarios: '/api/usuarios',
        enfermedad: '/api/enfermedades',
        insumo: '/api/insumos',
        maquinaria: '/api/maquinarias',
        terreno: '/api/terreno',
        persona: '/api/personas',
        finca: '/api/fincas',
        listInsumo: '/api/listainsumos',
        listPersona: '/api/listPersonal',
        listMaquinarias: '/api/listmaquinarias',
        historial: '/api/historial',
        cronograma: '/api/cronograma',
        dwre: '/api/dwre',

        listcultivo: '/api/listcultivos',
        listterreno: '/api/listterreno',

        planificacion: '/api/planificacion',
        detalleplanificacion: '/api/detalleplanificacion',
        tiposenfermedades: '/api/tiposenfermedades',
        tiposgraminea: '/api/tiposgraminea',
        tiposinsumos: '/api/tiposinsumos',
        tiposmaquinarias: '/api/tiposmaquinarias',
        tiposplagas: '/api/tiposplagas',
        proveedor: '/api/proveedor',
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
            this.app.use(this.apiPaths.listMaquinarias, listMaquinariasRoutes),
            this.app.use(this.apiPaths.historial, historialRoutes),
            this.app.use(this.apiPaths.listterreno, listTerrenosRoute),
            this.app.use(this.apiPaths.planificacion, planificacionRoute),
            this.app.use(this.apiPaths.detalleplanificacion, detalleplanificacionRoute),
            this.app.use(this.apiPaths.tiposenfermedades, tiposenfermedadesRoute),
            this.app.use(this.apiPaths.tiposgraminea, tiposgramineaRoute),
            this.app.use(this.apiPaths.tiposinsumos, tiposinsumosRoute),
            this.app.use(this.apiPaths.tiposmaquinarias, tiposmaquinariasRoute),
            this.app.use(this.apiPaths.tiposplagas, tiposplagasRoute),
            this.app.use(this.apiPaths.proveedor, proveedorRoute)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;