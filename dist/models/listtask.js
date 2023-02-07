"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const listTask = connection_1.default.define('listtask', {
    uid: {
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
    estado: {
        type: sequelize_1.DataTypes.STRING
    },
    idTask: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
listTask.belongsTo(usuario_1.default, { foreignKey: 'idTask', targetKey: 'uid' });
exports.default = listTask;
//# sourceMappingURL=listtask.js.map