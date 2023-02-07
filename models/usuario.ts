import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Usuario;