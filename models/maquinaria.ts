import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Maquinarias = db.define('maquinarias', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },
});


export default Maquinarias;