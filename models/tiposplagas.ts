import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TiposPlagas = db.define('tiposplagas', {
    idtiposplagas: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

});


export default TiposPlagas;