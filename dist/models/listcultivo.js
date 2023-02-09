"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const finca_1 = __importDefault(require("./finca"));
const terreno_1 = __importDefault(require("./terreno"));
const listcultivos = connection_1.default.define('listcultivos', {
    uid: {
        primaryKey: true,
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
    idFinca: {
        type: sequelize_1.DataTypes.STRING
    },
    idTerreno: {
        type: sequelize_1.DataTypes.STRING
    },
    idTask: {
        type: sequelize_1.DataTypes.STRING
    }
}, { freezeTableName: true });
listcultivos.belongsTo(finca_1.default, { foreignKey: 'idFinca', targetKey: 'uid' });
listcultivos.belongsTo(terreno_1.default, { foreignKey: 'idTerreno', targetKey: 'uid' });
exports.default = listcultivos;
//# sourceMappingURL=listcultivo.js.map