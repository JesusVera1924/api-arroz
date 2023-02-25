import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Planificacion from './planificacion';

const Detalleplanificacion = db.define('detalleplanificacion', {
    iddetalleplanificacion: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idPlanificacion: {
        type: DataTypes.STRING
    },
    actividad: {
        type: DataTypes.STRING
    },
    idTerreno: {
        type: DataTypes.STRING
    },
    idtipograminea: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    inicio: {
        type: DataTypes.DATE
    },
    fin: {
        type: DataTypes.DATE
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }



}, { freezeTableName: true });


export default Detalleplanificacion;