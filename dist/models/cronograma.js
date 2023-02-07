"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cronograma = connection_1.default.define('cronograma', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_fin: {
        type: sequelize_1.DataTypes.DATE
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    idlisttask: {
        type: sequelize_1.DataTypes.STRING
    },
}, { freezeTableName: true });
exports.default = Cronograma;
//# sourceMappingURL=cronograma.js.map