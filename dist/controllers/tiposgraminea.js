"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoGraminea = exports.putTipoGraminea = exports.postTipoGraminea = exports.getTipoGraminea = exports.getTipoGramineaes = void 0;
const tiposgraminea_1 = __importDefault(require("../models/tiposgraminea"));
const getTipoGramineaes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoGranea = yield tiposgraminea_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(tipoGranea);
});
exports.getTipoGramineaes = getTipoGramineaes;
const getTipoGraminea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipoGranea = yield tiposgraminea_1.default.findByPk(id);
    if (tipoGranea) {
        res.json(tipoGranea);
    }
    else {
        res.status(404).json({
            msg: `No existe un TipoGraminea con el id ${id}`
        });
    }
});
exports.getTipoGraminea = getTipoGraminea;
const postTipoGraminea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tipoGranea = tiposgraminea_1.default.build(body);
        yield tipoGranea.save();
        res.json(tiposgraminea_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTipoGraminea = postTipoGraminea;
const putTipoGraminea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipoGranea = yield tiposgraminea_1.default.findByPk(id);
        if (!tipoGranea) {
            return res.status(404).json({
                msg: 'No existe un TipoGraminea con el id ' + id
            });
        }
        yield tipoGranea.update(body);
        res.json(tipoGranea);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTipoGraminea = putTipoGraminea;
const deleteTipoGraminea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipoGranea = yield tiposgraminea_1.default.findByPk(id);
    if (!tipoGranea) {
        return res.status(404).json({
            msg: 'No existe un TipoGraminea con el id ' + id
        });
    }
    yield tipoGranea.update({ estado: false });
    // await TipoGraminea.destroy();
    res.json(tipoGranea);
});
exports.deleteTipoGraminea = deleteTipoGraminea;
//# sourceMappingURL=tiposgraminea.js.map