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
exports.deleteListCultivo = exports.putListCultivo = exports.postListCultivo = exports.getListCultivo = exports.getListCultivos = void 0;
const listcultivo_1 = __importDefault(require("../models/listcultivo"));
const getListCultivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield listcultivo_1.default.findAll();
        res.json(list);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getListCultivos = getListCultivos;
const getListCultivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const list = yield listcultivo_1.default.findByPk(id);
    if (list) {
        res.json(list);
    }
    else {
        res.status(404).json({
            msg: `No existe un list con el id ${id}`
        });
    }
});
exports.getListCultivo = getListCultivo;
const postListCultivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const listcultivo = listcultivo_1.default.build(body);
        yield listcultivo.save();
        res.json(listcultivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postListCultivo = postListCultivo;
const putListCultivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const listcultivo = yield listcultivo_1.default.findByPk(id);
        if (!listcultivo) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield listcultivo.update(body);
        res.json(listcultivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListCultivo = putListCultivo;
const deleteListCultivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listcultivo = yield listcultivo_1.default.findByPk(id);
    if (!listcultivo) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield listcultivo.update({ estado: false });
    // await finca.destroy();
    res.json(listcultivo);
});
exports.deleteListCultivo = deleteListCultivo;
//# sourceMappingURL=listcultivo.js.map