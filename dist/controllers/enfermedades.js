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
exports.deleteEnfermedad = exports.putEnfermedad = exports.postEnfermedad = exports.getEnfermedad = exports.getEnfermedades = void 0;
const enfermedad_1 = __importDefault(require("../models/enfermedad"));
const getEnfermedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const enfermedades = yield enfermedad_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(enfermedades);
});
exports.getEnfermedades = getEnfermedades;
const getEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const enfermedad = yield enfermedad_1.default.findByPk(id);
    if (enfermedad) {
        res.json(enfermedad);
    }
    else {
        res.status(404).json({
            msg: `No existe un enfermedad con el id ${id}`
        });
    }
});
exports.getEnfermedad = getEnfermedad;
const postEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const enfermedad = enfermedad_1.default.build(body);
        yield enfermedad.save();
        res.json(enfermedad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postEnfermedad = postEnfermedad;
const putEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const enfermedad = yield enfermedad_1.default.findByPk(id);
        if (!enfermedad) {
            return res.status(404).json({
                msg: 'No existe un enfermedad con el id ' + id
            });
        }
        yield enfermedad.update(body);
        res.json(enfermedad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putEnfermedad = putEnfermedad;
const deleteEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const enfermedad = yield enfermedad_1.default.findByPk(id);
    if (!enfermedad) {
        return res.status(404).json({
            msg: 'No existe un enfermedad con el id ' + id
        });
    }
    yield enfermedad.update({ estado: false });
    // await enfermedad.destroy();
    res.json(enfermedad);
});
exports.deleteEnfermedad = deleteEnfermedad;
//# sourceMappingURL=enfermedades.js.map