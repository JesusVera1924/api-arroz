import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Finca from './finca';

const Terreno = db.define('terreno', {
    idterreno: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idFinca: {
        type: DataTypes.STRING
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    dimension: {
        type: DataTypes.STRING
    },
    longitud: {
        type: DataTypes.STRING
    },
    latitud: {
        type: DataTypes.STRING
    },
    unidad: {
        type: DataTypes.STRING
    },
    disponibilidad: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, { freezeTableName: true });


Terreno.belongsTo(Finca, { foreignKey: 'idFinca', targetKey: 'idfinca' });

export default Terreno;