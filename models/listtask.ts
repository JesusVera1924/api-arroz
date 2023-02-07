import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const listTask = db.define('listtask', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    idTask: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });

listTask.belongsTo(Usuario, { foreignKey: 'idTask', targetKey: 'uid' });

export default listTask;