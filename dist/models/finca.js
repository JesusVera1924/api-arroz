"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Finca = connection_1.default.define('finca', {
    idfinca: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    dimension: {
        type: sequelize_1.DataTypes.STRING
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, { freezeTableName: true });
exports.default = Finca;
//# sourceMappingURL=finca.js.map