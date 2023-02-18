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
exports.deleteTiposinsumos = exports.putTiposinsumos = exports.postTiposinsumos = exports.getTiposinsumos = exports.getTiposinsumoses = void 0;
const tiposinsumos_1 = __importDefault(require("../models/tiposinsumos"));
const getTiposinsumoses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tiposinsumos = yield tiposinsumos_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(tiposinsumos);
});
exports.getTiposinsumoses = getTiposinsumoses;
const getTiposinsumos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposinsumos = yield tiposinsumos_1.default.findByPk(id);
    if (tiposinsumos) {
        res.json(tiposinsumos);
    }
    else {
        res.status(404).json({
            msg: `No existe un Tiposinsumos con el id ${id}`
        });
    }
});
exports.getTiposinsumos = getTiposinsumos;
const postTiposinsumos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tiposinsumos = tiposinsumos_1.default.build(body);
        yield tiposinsumos.save();
        res.json(tiposinsumos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTiposinsumos = postTiposinsumos;
const putTiposinsumos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tiposinsumos = yield tiposinsumos_1.default.findByPk(id);
        if (!tiposinsumos) {
            return res.status(404).json({
                msg: 'No existe un Tiposinsumos con el id ' + id
            });
        }
        yield tiposinsumos.update(body);
        res.json(tiposinsumos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTiposinsumos = putTiposinsumos;
const deleteTiposinsumos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tiposinsumos = yield tiposinsumos_1.default.findByPk(id);
    if (!tiposinsumos) {
        return res.status(404).json({
            msg: 'No existe un Tiposinsumos con el id ' + id
        });
    }
    yield tiposinsumos.update({ estado: false });
    // await Tiposinsumos.destroy();
    res.json(tiposinsumos);
});
exports.deleteTiposinsumos = deleteTiposinsumos;
//# sourceMappingURL=tiposinsumos.js.map