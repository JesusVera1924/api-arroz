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
exports.deleteListInsumo = exports.putListInsumo = exports.postListInsumo = exports.getListInsumo = exports.getListInsumos = void 0;
const listinsumos_1 = __importDefault(require("../models/listinsumos"));
const getListInsumos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listinsumo = yield listinsumos_1.default.findAll();
        res.json(listinsumo);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getListInsumos = getListInsumos;
const getListInsumo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const insumos = yield listinsumos_1.default.findByPk(id);
    if (insumos) {
        res.json(insumos);
    }
    else {
        res.status(404).json({
            msg: `No existe un insumos con el id ${id}`
        });
    }
});
exports.getListInsumo = getListInsumo;
const postListInsumo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const insumo = listinsumos_1.default.build(body);
        yield insumo.save();
        res.json(insumo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postListInsumo = postListInsumo;
const putListInsumo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const listInsumo = yield listinsumos_1.default.findByPk(id);
        if (!listInsumo) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield listInsumo.update(body);
        res.json(listInsumo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListInsumo = putListInsumo;
const deleteListInsumo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listInsumo = yield listinsumos_1.default.findByPk(id);
    if (!listInsumo) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield listInsumo.update({ estado: false });
    // await finca.destroy();
    res.json(listInsumo);
});
exports.deleteListInsumo = deleteListInsumo;
//# sourceMappingURL=listinsumo.js.map