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
exports.deleteTiposMaquinarias = exports.putTiposMaquinarias = exports.postTiposMaquinarias = exports.getTiposMaquinarias = exports.getTiposMaquinariases = void 0;
const tiposmaquinarias_1 = __importDefault(require("../models/tiposmaquinarias"));
const getTiposMaquinariases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tiposMaquinarias = yield tiposmaquinarias_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(tiposMaquinarias);
});
exports.getTiposMaquinariases = getTiposMaquinariases;
const getTiposMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposMaquinarias = yield tiposmaquinarias_1.default.findByPk(id);
    if (tiposMaquinarias) {
        res.json(tiposMaquinarias);
    }
    else {
        res.status(404).json({
            msg: `No existe un TiposMaquinarias con el id ${id}`
        });
    }
});
exports.getTiposMaquinarias = getTiposMaquinarias;
const postTiposMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tiposMaquinarias = tiposmaquinarias_1.default.build(body);
        yield tiposMaquinarias.save();
        res.json(tiposMaquinarias);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTiposMaquinarias = postTiposMaquinarias;
const putTiposMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tiposMaquinarias = yield tiposmaquinarias_1.default.findByPk(id);
        if (!tiposMaquinarias) {
            return res.status(404).json({
                msg: 'No existe un TiposMaquinarias con el id ' + id
            });
        }
        yield tiposMaquinarias.update(body);
        res.json(tiposMaquinarias);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTiposMaquinarias = putTiposMaquinarias;
const deleteTiposMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposMaquinarias = yield tiposmaquinarias_1.default.findByPk(id);
    if (!tiposMaquinarias) {
        return res.status(404).json({
            msg: 'No existe un TiposMaquinarias con el id ' + id
        });
    }
    yield tiposMaquinarias.update({ estado: false });
    // await TiposMaquinarias.destroy();
    res.json(tiposMaquinarias);
});
exports.deleteTiposMaquinarias = deleteTiposMaquinarias;
//# sourceMappingURL=tiposmaquinarias.js.map