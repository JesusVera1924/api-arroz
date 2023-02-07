import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cronograma = db.define('cronograma', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    observacion: {
        type: DataTypes.STRING
    },
    idlisttask: {
        type: DataTypes.STRING
    },


}, { freezeTableName: true });


export default Cronograma;