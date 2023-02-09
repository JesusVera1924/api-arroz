import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listinsumos = db.define('listinsumos', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    idinsumo: {
        type: DataTypes.INTEGER
    }
}, { freezeTableName: true });


export default listinsumos;