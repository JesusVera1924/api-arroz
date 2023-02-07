import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Finca from './finca';
import listinsumos from './listinsumos';
import listPersonal from './listpersonal';
import Terreno from './terreno';
import Usuario from './usuario';

const Task = db.define('task', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    idFinca: {
        type: DataTypes.STRING
    },
    idTerreno: {
        type: DataTypes.STRING
    },
    disponible: {
        type: DataTypes.INTEGER
    },
    humedad: {
        type: DataTypes.STRING
    },
    temperatura: {
        type: DataTypes.STRING
    },
    idInsumos: {
        type: DataTypes.STRING
    },
    idPersonal: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    start: {
        type: DataTypes.DATE
    },
    end: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.INTEGER
    },

}, { freezeTableName: true });

Task.belongsTo(Finca, { foreignKey: 'idFinca', targetKey: 'uid' });
Task.belongsTo(Terreno, { foreignKey: 'idTerreno', targetKey: 'uid' });


export default Task;