"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const listMaquinarias = connection_1.default.define('listmaquinarias', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    idmaquinaria: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
exports.default = listMaquinarias;
//# sourceMappingURL=listmaquinarias.js.map