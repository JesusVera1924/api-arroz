import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tiposgraminea = db.define('tiposgraminea', {
    idtipograminea: {
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


export default Tiposgraminea;