import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listMaquinarias = db.define('listamaquinarias', {
    idlistamaquinaria: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idMaquinaria: {
        type: DataTypes.STRING
    },
    idPlanificacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, { freezeTableName: true });


export default listMaquinarias;