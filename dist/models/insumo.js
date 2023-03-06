"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proveedor_1 = __importDefault(require("./proveedor"));
const Insumo = connection_1.default.define('insumos', {
    idinsumos: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    insumoTipoId: {
        type: sequelize_1.DataTypes.STRING
    },
    idProveedor: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    fechaCaducidad: {
        type: sequelize_1.DataTypes.DATE
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    unidades: {
        type: sequelize_1.DataTypes.STRING
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
Insumo.belongsTo(proveedor_1.default, { foreignKey: 'idProveedor', targetKey: 'idproveedores' });
exports.default = Insumo;
//# sourceMappingURL=insumo.js.map