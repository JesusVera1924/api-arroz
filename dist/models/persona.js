"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Persona = connection_1.default.define('personas', {
    idpersonas: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    celular: {
        type: sequelize_1.DataTypes.STRING
    },
    nacimiento: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idUsuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false
});
exports.default = Persona;
//# sourceMappingURL=persona.js.map