"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const listPersonal = connection_1.default.define('listadepersonal', {
    idlistadepersonal: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idPersonal: {
        type: sequelize_1.DataTypes.STRING
    },
    idPlanificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
exports.default = listPersonal;
//# sourceMappingURL=listpersonal.js.map