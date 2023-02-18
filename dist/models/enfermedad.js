"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Enfermedad = connection_1.default.define('enfermedades', {
    idenfermedades: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    plagasTipoId: {
        type: sequelize_1.DataTypes.STRING
    },
    enfermedadTipoId: {
        type: sequelize_1.DataTypes.STRING
    },
    especificaciones: {
        type: sequelize_1.DataTypes.STRING
    },
    tratamiento: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    fotografia: {
        type: sequelize_1.DataTypes.TEXT
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
exports.default = Enfermedad;
//# sourceMappingURL=enfermedad.js.map