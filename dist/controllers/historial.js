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
exports.deleteHistorial = exports.putHistorial = exports.postHistorial = exports.getHistorial = exports.getHistorialTerreno = exports.getHistorials = void 0;
const historial_1 = __importDefault(require("../models/historial"));
const getHistorials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const historial = yield historial_1.default.findAll();
        res.json(historial);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getHistorials = getHistorials;
const getHistorialTerreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const historial = yield historial_1.default.findAll({
            where: {
                referencia: id
            }
        });
        res.json(historial);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getHistorialTerreno = getHistorialTerreno;
const getHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hist = yield historial_1.default.findByPk(id);
    if (hist) {
        res.json(hist);
    }
    else {
        res.status(404).json({
            msg: `No existe un hist con el id ${id}`
        });
    }
});
exports.getHistorial = getHistorial;
const postHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const hist = historial_1.default.build(body);
        yield hist.save();
        res.json(hist);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postHistorial = postHistorial;
const putHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const hist = yield historial_1.default.findByPk(id);
        if (!hist) {
            return res.status(404).json({
                msg: 'No existe un hist con el id ' + id
            });
        }
        yield hist.update(body);
        res.json(hist);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putHistorial = putHistorial;
const deleteHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hist = yield historial_1.default.findByPk(id);
    if (!hist) {
        return res.status(404).json({
            msg: 'No existe un hist con el id ' + id
        });
    }
    yield hist.update({ estado: false });
    // await hist.destroy();
    res.json(hist);
});
exports.deleteHistorial = deleteHistorial;
//# sourceMappingURL=historial.js.map