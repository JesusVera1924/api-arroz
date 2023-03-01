"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proveedores = connection_1.default.define('proveedores', {
    idproveedores: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, { freezeTableName: true });
exports.default = proveedores;
//# sourceMappingURL=proveedor.js.map