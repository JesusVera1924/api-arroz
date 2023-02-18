import { DataTypes } from 'sequelize';
import db from '../db/connection';

const listinsumos = db.define('listadeinsumos', {
    idlistadeInsumos: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idInsumo: {
        type: DataTypes.STRING
    },
    idPlanificacion: {
        type: DataTypes.STRING
    },
    unidad: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    }
}, { freezeTableName: true });


export default listinsumos;