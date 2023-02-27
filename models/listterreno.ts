import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listerrenos = db.define('listadeterrenos', {
    idlistadeterrenos: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idTerreno: {
        type: DataTypes.STRING
    },
    idGramineas: {
        type: DataTypes.STRING
    },
    idenfermedad: {
        type: DataTypes.STRING
    },
    idPlanificacion: {
        type: DataTypes.STRING
    },
    ocupado: {
        type: DataTypes.BOOLEAN
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, { freezeTableName: true });


export default listerrenos;