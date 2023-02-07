import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Dwre = db.define('dwre', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    tiporeporte: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    idusuario: {
        type: DataTypes.STRING
    },



}, { freezeTableName: true });


export default Dwre;