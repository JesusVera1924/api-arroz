"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const finca_1 = __importDefault(require("./finca"));
const Terreno = connection_1.default.define('terreno', {
    idterreno: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idFinca: {
        type: sequelize_1.DataTypes.STRING
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING
    },
    dimension: {
        type: sequelize_1.DataTypes.STRING
    },
    longitud: {
        type: sequelize_1.DataTypes.STRING
    },
    latitud: {
        type: sequelize_1.DataTypes.STRING
    },
    unidad: {
        type: sequelize_1.DataTypes.STRING
    },
    disponibilidad: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, { freezeTableName: true });
Terreno.belongsTo(finca_1.default, { foreignKey: 'idFinca', targetKey: 'idfinca' });
exports.default = Terreno;
//# sourceMappingURL=terreno.js.map