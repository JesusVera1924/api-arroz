import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Maquinarias = db.define('maquinarias', {
    idmaquinarias: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    identificacion: {
        type: DataTypes.STRING
    },
    maquinariaTipoId: {
        type: DataTypes.STRING
    },
    capacidad: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Maquinarias;