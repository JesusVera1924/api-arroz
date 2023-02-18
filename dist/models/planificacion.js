"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('planificacion', {
    idplanificacion: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idFinca: {
        type: sequelize_1.DataTypes.STRING
    },
    humedad: {
        type: sequelize_1.DataTypes.STRING
    },
    temperatura: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idListInsumo: {
        type: sequelize_1.DataTypes.TEXT
    },
    idListPersonal: {
        type: sequelize_1.DataTypes.STRING
    },
    idUsuario: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion2: {
        type: sequelize_1.DataTypes.STRING
    },
    fechaI: {
        type: sequelize_1.DataTypes.DATE
    },
    fechaF: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, { freezeTableName: true });
exports.default = Usuario;
//# sourceMappingURL=planificacion.js.map