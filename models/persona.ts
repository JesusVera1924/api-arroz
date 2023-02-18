import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const Persona = db.define('personas', {
    idpersonas: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    nacimiento: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    idUsuario: {
        type: DataTypes.INTEGER
    },


}, {
    timestamps: false
});



export default Persona;