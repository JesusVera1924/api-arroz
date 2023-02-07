import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listMaquinarias = db.define('listmaquinarias', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    idmaquinaria: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });


export default listMaquinarias;