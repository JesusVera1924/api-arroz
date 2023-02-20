"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const listerrenos = connection_1.default.define('listadeterrenos', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    idTerreno: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
exports.default = listerrenos;
//# sourceMappingURL=listterreno.js.map