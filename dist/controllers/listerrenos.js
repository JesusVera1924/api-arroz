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
exports.deleteListterreno = exports.putListterreno = exports.postListterreno = exports.getListterreno = exports.getListterrenos = void 0;
const listterreno_1 = __importDefault(require("../models/listterreno"));
const getListterrenos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listterreno = yield listterreno_1.default.findAll();
        res.json(listterreno);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getListterrenos = getListterrenos;
const getListterreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const terrenos = yield listterreno_1.default.findByPk(id);
    if (terrenos) {
        res.json(terrenos);
    }
    else {
        res.status(404).json({
            msg: `No existe un terrenos con el id ${id}`
        });
    }
});
exports.getListterreno = getListterreno;
const postListterreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const terrenos = listterreno_1.default.build(body);
        yield terrenos.save();
        res.json(terrenos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postListterreno = postListterreno;
const putListterreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const listerrenos = yield listterreno_1.default.findByPk(id);
        if (!listerrenos) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield listerrenos.update(body);
        res.json(listerrenos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListterreno = putListterreno;
const deleteListterreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listterreno = yield listterreno_1.default.findByPk(id);
    if (!listterreno) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield listterreno.update({ estado: false });
    // await finca.destroy();
    res.json(listterreno);
});
exports.deleteListterreno = deleteListterreno;
//# sourceMappingURL=listerrenos.js.map