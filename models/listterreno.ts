import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listerrenos = db.define('listadeterrenos', {
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


export default listerrenos;