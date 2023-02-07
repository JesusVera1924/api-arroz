import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';

const Persona = db.define('personas', {
    uid: {
        primaryKey: true,
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
    correo: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },
    idusuario: {
        type: DataTypes.STRING
    },

}, {
    timestamps: false
});

Persona.belongsTo(Usuario, { foreignKey: 'idusuario', targetKey: 'uid' });


export default Persona;