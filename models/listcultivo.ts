import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Finca from './finca';
import Terreno from './terreno';

const listcultivos = db.define('listcultivos', {
    uid: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    idFinca: {
        type: DataTypes.STRING
    },
    idTerreno: {
        type: DataTypes.STRING
    },
    idTask: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });

listcultivos.belongsTo(Finca, { foreignKey: 'idFinca', targetKey: 'uid' });
listcultivos.belongsTo(Terreno, { foreignKey: 'idTerreno', targetKey: 'uid' });

export default listcultivos;