import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tiposinsumos = db.define('tiposinsumos', {
    idtiposinsumos: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, { freezeTableName: true });


export default Tiposinsumos;