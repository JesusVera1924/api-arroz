import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const listPersonal = db.define('listpersonal', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });

listPersonal.belongsTo(Usuario, { foreignKey: 'idUsuario', targetKey: 'uid' });

export default listPersonal;