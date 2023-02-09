import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const listerrenos = db.define('listerrenos', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    idTerreno: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });

listerrenos.belongsTo(Usuario, { foreignKey: 'idTerreno', targetKey: 'uid' });

export default listerrenos;