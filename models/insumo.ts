import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Proveedor from './proveedor';

const Insumo = db.define('insumos', {
    idinsumos: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    insumoTipoId: {
        type: DataTypes.STRING
    },
    idProveedor: {
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
    cantidad: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.INTEGER
    },

});

Insumo.belongsTo(Proveedor, { foreignKey: 'idProveedor', targetKey: 'idproveedores' });

export default Insumo;