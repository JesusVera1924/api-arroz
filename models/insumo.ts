import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Insumo = db.define('insumos', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    clase: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Insumo;