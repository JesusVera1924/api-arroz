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
exports.deleteTipoenfermedades = exports.putTipoenfermedades = exports.postTipoenfermedades = exports.getTipoenfermedades = exports.getTipoenfermedadeses = void 0;
const tiposenfermedades_1 = __importDefault(require("../models/tiposenfermedades"));
const getTipoenfermedadeses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detallesPlanificacion = yield tiposenfermedades_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(detallesPlanificacion);
});
exports.getTipoenfermedadeses = getTipoenfermedadeses;
const getTipoenfermedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detallesPlanificacion = yield tiposenfermedades_1.default.findByPk(id);
    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    }
    else {
        res.status(404).json({
            msg: `No existe un Tipoenfermedades con el id ${id}`
        });
    }
});
exports.getTipoenfermedades = getTipoenfermedades;
const postTipoenfermedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tipoenfermedades = tiposenfermedades_1.default.build(body);
        yield tipoenfermedades.save();
        res.json(tiposenfermedades_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTipoenfermedades = postTipoenfermedades;
const putTipoenfermedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipoenfermedades = yield tiposenfermedades_1.default.findByPk(id);
        if (!tipoenfermedades) {
            return res.status(404).json({
                msg: 'No existe un Tipoenfermedades con el id ' + id
            });
        }
        yield tipoenfermedades.update(body);
        res.json(tiposenfermedades_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTipoenfermedades = putTipoenfermedades;
const deleteTipoenfermedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipoenfermedades = yield tiposenfermedades_1.default.findByPk(id);
    if (!tipoenfermedades) {
        return res.status(404).json({
            msg: 'No existe un Tipoenfermedades con el id ' + id
        });
    }
    yield tipoenfermedades.update({ estado: false });
    // await Tipoenfermedades.destroy();
    res.json(tiposenfermedades_1.default);
});
exports.deleteTipoenfermedades = deleteTipoenfermedades;
//# sourceMappingURL=tiposenfermedades.js.map