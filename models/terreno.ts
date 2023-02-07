import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Terreno = db.define('terrenos', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    dimension: {
        type: DataTypes.STRING
    },
    unidad: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    }
},);


export default Terreno;