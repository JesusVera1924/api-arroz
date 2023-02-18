import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios', {
    idusuarios: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    img: {
        type: DataTypes.TEXT
    },
    clave: {
        type: DataTypes.STRING
    },
});


export default Usuario;