import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Enfermedad = db.define('enfermedades', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    grado: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Enfermedad;