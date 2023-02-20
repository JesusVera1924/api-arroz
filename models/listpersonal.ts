import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listPersonal = db.define('listadepersonals', {
    idlistadepersonal: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idPersonal: {
        type: DataTypes.STRING
    },
    idPlanificacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });


export default listPersonal;