import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Enfermedad = db.define('enfermedades', {
    idenfermedades: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    plagasTipoId: {
        type: DataTypes.STRING
    },
    enfermedadTipoId: {
        type: DataTypes.STRING
    },
    especificaciones: {
        type: DataTypes.STRING
    },
    tratamiento: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    fotografia: {
        type: DataTypes.TEXT
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Enfermedad;