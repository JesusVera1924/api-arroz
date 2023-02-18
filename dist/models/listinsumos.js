"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const listinsumos = connection_1.default.define('listadeinsumos', {
    idlistadeInsumos: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idInsumo: {
        type: sequelize_1.DataTypes.STRING
    },
    idPlanificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    unidad: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, { freezeTableName: true });
exports.default = listinsumos;
//# sourceMappingURL=listinsumos.js.map