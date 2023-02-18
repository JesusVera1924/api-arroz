import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tiposenfermedades = db.define('tiposenfermedades', {
    idtiposenfermedades: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, { freezeTableName: true });


export default Tiposenfermedades;