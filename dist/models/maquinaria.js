"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Maquinarias = connection_1.default.define('maquinarias', {
    idmaquinarias: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    identificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    maquinariaTipoId: {
        type: sequelize_1.DataTypes.STRING
    },
    capacidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
exports.default = Maquinarias;
//# sourceMappingURL=maquinaria.js.map