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
exports.deleteDwre = exports.putDwere = exports.postDwre = exports.getDwre = exports.getDwres = void 0;
const dwre_1 = __importDefault(require("../models/dwre"));
const getDwres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dwre = yield dwre_1.default.findAll();
        res.json(dwre);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDwres = getDwres;
const getDwre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dwre = yield dwre_1.default.findByPk(id);
    if (dwre) {
        res.json(dwre);
    }
    else {
        res.status(404).json({
            msg: `No existe un dwre con el id ${id}`
        });
    }
});
exports.getDwre = getDwre;
const postDwre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const dwre = dwre_1.default.build(body);
        yield dwre.save();
        res.json(dwre);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDwre = postDwre;
const putDwere = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const dwre = yield dwre_1.default.findByPk(id);
        if (!dwre) {
            return res.status(404).json({
                msg: 'No existe un dwre con el id ' + id
            });
        }
        yield dwre.update(body);
        res.json(dwre);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putDwere = putDwere;
const deleteDwre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dwre = yield dwre_1.default.findByPk(id);
    if (!dwre) {
        return res.status(404).json({
            msg: 'No existe un dwre con el id ' + id
        });
    }
    yield dwre.update({ estado: false });
    // await dwre.destroy();
    res.json(dwre);
});
exports.deleteDwre = deleteDwre;
//# sourceMappingURL=dwre.js.map