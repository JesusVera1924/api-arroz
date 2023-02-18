import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Insumo = db.define('insumos', {
    idinsumos: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    insumoTipoId: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    fechaCaducidad: {
        type: DataTypes.DATE
    },
    observacion: {
        type: DataTypes.STRING
    },
    unidades: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },

});


export default Insumo;