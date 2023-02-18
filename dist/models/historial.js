"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Historial = connection_1.default.define('historial', {
    idhistorial: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion2: {
        type: sequelize_1.DataTypes.STRING
    },
    evaluar: {
        type: sequelize_1.DataTypes.INTEGER
    },
    carga: {
        type: sequelize_1.DataTypes.TEXT
    }
}, { freezeTableName: true });
exports.default = Historial;
//# sourceMappingURL=historial.js.map