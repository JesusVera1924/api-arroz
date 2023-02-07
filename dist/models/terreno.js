"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Terreno = connection_1.default.define('terrenos', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING
    },
    dimension: {
        type: sequelize_1.DataTypes.STRING
    },
    unidad: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Terreno;
//# sourceMappingURL=terreno.js.map