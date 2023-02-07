import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Historial = db.define('historial', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });


export default Historial;