"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Tiposgraminea = connection_1.default.define('tiposgraminea', {
    idtipograminea: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, { freezeTableName: true });
exports.default = Tiposgraminea;
//# sourceMappingURL=tiposgraminea.js.map