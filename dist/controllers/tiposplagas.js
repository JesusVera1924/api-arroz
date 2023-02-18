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
exports.deleteTiposPlagas = exports.putTiposPlagas = exports.postTiposPlagas = exports.getTiposPlagas = exports.getTiposPlagases = void 0;
const tiposplagas_1 = __importDefault(require("../models/tiposplagas"));
const getTiposPlagases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tiposPlagas = yield tiposplagas_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(tiposPlagas);
});
exports.getTiposPlagases = getTiposPlagases;
const getTiposPlagas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposPlagas = yield tiposplagas_1.default.findByPk(id);
    if (tiposPlagas) {
        res.json(tiposPlagas);
    }
    else {
        res.status(404).json({
            msg: `No existe un TiposPlagas con el id ${id}`
        });
    }
});
exports.getTiposPlagas = getTiposPlagas;
const postTiposPlagas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tiposPlagas = tiposplagas_1.default.build(body);
        yield tiposPlagas.save();
        res.json(tiposPlagas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTiposPlagas = postTiposPlagas;
const putTiposPlagas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tiposPlagas = yield tiposplagas_1.default.findByPk(id);
        if (!tiposPlagas) {
            return res.status(404).json({
                msg: 'No existe un TiposPlagas con el id ' + id
            });
        }
        yield tiposPlagas.update(body);
        res.json(tiposPlagas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTiposPlagas = putTiposPlagas;
const deleteTiposPlagas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposPlagas = yield tiposplagas_1.default.findByPk(id);
    if (!tiposPlagas) {
        return res.status(404).json({
            msg: 'No existe un TiposPlagas con el id ' + id
        });
    }
    yield tiposPlagas.update({ estado: false });
    // await TiposPlagas.destroy();
    res.json(tiposPlagas);
});
exports.deleteTiposPlagas = deleteTiposPlagas;
//# sourceMappingURL=tiposplagas.js.map