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
exports.deleteFinca = exports.putFinca = exports.postFinca = exports.getFinca = exports.getFincas = void 0;
const finca_1 = __importDefault(require("../models/finca"));
const getFincas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fincas = yield finca_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(fincas);
});
exports.getFincas = getFincas;
const getFinca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const finca = yield finca_1.default.findByPk(id);
    if (finca) {
        res.json(finca);
    }
    else {
        res.status(404).json({
            msg: `No existe un finca con el id ${id}`
        });
    }
});
exports.getFinca = getFinca;
const postFinca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const finca = finca_1.default.build(body);
        yield finca.save();
        res.json(finca);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postFinca = postFinca;
const putFinca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const finca = yield finca_1.default.findByPk(id);
        if (!finca) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield finca.update(body);
        res.json(finca);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putFinca = putFinca;
const deleteFinca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const finca = yield finca_1.default.findByPk(id);
    if (!finca) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield finca.update({ estado: false });
    // await finca.destroy();
    res.json(finca);
});
exports.deleteFinca = deleteFinca;
//# sourceMappingURL=fincas.js.map