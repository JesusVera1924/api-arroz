import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Historial = db.define('historial', {
    idhistorial: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    evaluar: {
        type: DataTypes.INTEGER
    },
    carga: {
        type: DataTypes.TEXT
    }
}, { freezeTableName: true });


export default Historial;