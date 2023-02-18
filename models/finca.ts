import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Finca = db.define('finca', {
    idfinca: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    dimension: {
        type: DataTypes.STRING
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },

}, { freezeTableName: true });


export default Finca;