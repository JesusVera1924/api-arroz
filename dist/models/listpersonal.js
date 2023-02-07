"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const listPersonal = connection_1.default.define('listpersonal', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    idUsuario: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
listPersonal.belongsTo(usuario_1.default, { foreignKey: 'idUsuario', targetKey: 'uid' });
exports.default = listPersonal;
//# sourceMappingURL=listpersonal.js.map