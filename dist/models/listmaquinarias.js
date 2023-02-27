"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const listMaquinarias = connection_1.default.define('listmaquinarias', {
    idlistamaquinaria: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idMaquinaria: {
        type: sequelize_1.DataTypes.STRING
    },
    idPlanificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, { freezeTableName: true });
exports.default = listMaquinarias;
//# sourceMappingURL=listmaquinarias.js.map