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
exports.deleteTerreno = exports.putTerreno = exports.postTerreno = exports.getTerreno = exports.getTerrenos = void 0;
const terreno_1 = __importDefault(require("../models/terreno"));
const getTerrenos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const terrenos = yield terreno_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(terrenos);
});
exports.getTerrenos = getTerrenos;
const getTerreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const terreno = yield terreno_1.default.findByPk(id);
    if (terreno) {
        res.json(terreno);
    }
    else {
        res.status(404).json({
            msg: `No existe un terreno con el id ${id}`
        });
    }
});
exports.getTerreno = getTerreno;
const postTerreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const terreno = terreno_1.default.build(body);
        yield terreno.save();
        res.json(terreno);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postTerreno = postTerreno;
const putTerreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const terreno = yield terreno_1.default.findByPk(id);
        if (!terreno) {
            return res.status(404).json({
                msg: 'No existe un terreno con el id ' + id
            });
        }
        yield terreno.update(body);
        res.json(terreno);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTerreno = putTerreno;
const deleteTerreno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const terreno = yield terreno_1.default.findByPk(id);
    if (!terreno) {
        return res.status(404).json({
            msg: 'No existe un terreno con el id ' + id
        });
    }
    yield terreno.update({ estado: false });
    // await terreno.destroy();
    res.json(terreno);
});
exports.deleteTerreno = deleteTerreno;
//# sourceMappingURL=terrenos.js.map