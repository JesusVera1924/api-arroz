"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Detalleplanificacion = connection_1.default.define('detalleplanificacion', {
    iddetalleplanificacion: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idPlanificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    actividad: {
        type: sequelize_1.DataTypes.STRING
    },
    idTerreno: {
        type: sequelize_1.DataTypes.STRING
    },
    idtipograminea: {
        type: sequelize_1.DataTypes.STRING
    },
    inicio: {
        type: sequelize_1.DataTypes.STRING
    },
    fin: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion2: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, { freezeTableName: true });
exports.default = Detalleplanificacion;
//# sourceMappingURL=detalleplanificacion.js.map