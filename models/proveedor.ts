import { DataTypes } from 'sequelize';
import db from '../db/connection';

const proveedores = db.define('proveedores', {
    idproveedores: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    }
}, { freezeTableName: true });


export default proveedores;