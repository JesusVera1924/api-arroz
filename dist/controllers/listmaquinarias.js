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
exports.deleteListMaquinarias = exports.putListMaquinarias = exports.postListMaquinarias = exports.getListMaquinaria = exports.getListMaquinarias = void 0;
const listmaquinarias_1 = __importDefault(require("../models/listmaquinarias"));
const getListMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const maquinaria = yield listmaquinarias_1.default.findAll();
        res.json(maquinaria);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getListMaquinarias = getListMaquinarias;
const getListMaquinaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maquinarias = yield listmaquinarias_1.default.findByPk(id);
    if (maquinarias) {
        res.json(maquinarias);
    }
    else {
        res.status(404).json({
            msg: `No existe un maquinarias con el id ${id}`
        });
    }
});
exports.getListMaquinaria = getListMaquinaria;
const postListMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const maquinarias = listmaquinarias_1.default.build(body);
        yield maquinarias.save();
        res.json(maquinarias);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postListMaquinarias = postListMaquinarias;
const putListMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const maquinarias = yield listmaquinarias_1.default.findByPk(id);
        if (!maquinarias) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield maquinarias.update(body);
        res.json(maquinarias);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListMaquinarias = putListMaquinarias;
const deleteListMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maquinarias = yield listmaquinarias_1.default.findByPk(id);
    if (!maquinarias) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield maquinarias.update({ estado: false });
    // await finca.destroy();
    res.json(maquinarias);
});
exports.deleteListMaquinarias = deleteListMaquinarias;
//# sourceMappingURL=listmaquinarias.js.map