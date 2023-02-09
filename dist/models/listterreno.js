"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const listerrenos = connection_1.default.define('listterrenos', {
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
listerrenos.belongsTo(usuario_1.default, { foreignKey: 'idTerreno', targetKey: 'uid' });
exports.default = listerrenos;
//# sourceMappingURL=listterreno.js.map