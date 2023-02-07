"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const finca_1 = __importDefault(require("./finca"));
const terreno_1 = __importDefault(require("./terreno"));
const Task = connection_1.default.define('task', {
    uid: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    idFinca: {
        type: sequelize_1.DataTypes.STRING
    },
    idTerreno: {
        type: sequelize_1.DataTypes.STRING
    },
    disponible: {
        type: sequelize_1.DataTypes.INTEGER
    },
    humedad: {
        type: sequelize_1.DataTypes.STRING
    },
    temperatura: {
        type: sequelize_1.DataTypes.STRING
    },
    idInsumos: {
        type: sequelize_1.DataTypes.STRING
    },
    idPersonal: {
        type: sequelize_1.DataTypes.STRING
    },
    idUsuario: {
        type: sequelize_1.DataTypes.STRING
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
    start: {
        type: sequelize_1.DataTypes.DATE
    },
    end: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, { freezeTableName: true });
Task.belongsTo(finca_1.default, { foreignKey: 'idFinca', targetKey: 'uid' });
Task.belongsTo(terreno_1.default, { foreignKey: 'idTerreno', targetKey: 'uid' });
exports.default = Task;
//# sourceMappingURL=task.js.map