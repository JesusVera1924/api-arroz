import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Finca from './finca';
import Usuario from './usuario';

const planificacion = db.define('planificacion', {
    idplanificacion: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    humedad: {
        type: DataTypes.STRING
    },
    temperatura: {
        type: DataTypes.BOOLEAN
    },
    idListInsumo: {
        type: DataTypes.STRING
    },
    idListPersonal: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    observacion3: {
        type: DataTypes.STRING
    },
    fechaI: {
        type: DataTypes.DATE
    },
    fechaF: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

}, { freezeTableName: true });

planificacion.belongsTo(Finca, { foreignKey: 'idFinca', targetKey: 'idfinca' });
planificacion.belongsTo(Usuario, { foreignKey: 'idUsuario', targetKey: 'idusuarios' });

export default planificacion;