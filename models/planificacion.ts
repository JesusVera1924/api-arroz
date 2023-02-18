import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('planificacion', {
    idplanificacion: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idFinca: {
        type: DataTypes.STRING
    },
    humedad: {
        type: DataTypes.STRING
    },
    temperatura: {
        type: DataTypes.BOOLEAN
    },
    idListInsumo: {
        type: DataTypes.TEXT
    },
    idListPersonal: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    fechaI: {
        type: DataTypes.DATE
    },
    fechaF: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

}, { freezeTableName: true });


export default Usuario;