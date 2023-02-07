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
exports.deleteMaquinaria = exports.putMaquinaria = exports.postMaquinaria = exports.getMaquinaria = exports.getMaquinarias = void 0;
const maquinaria_1 = __importDefault(require("../models/maquinaria"));
const getMaquinarias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const maq = yield maquinaria_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(maq);
});
exports.getMaquinarias = getMaquinarias;
const getMaquinaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maquinaria = yield maquinaria_1.default.findByPk(id);
    if (maquinaria) {
        res.json(maquinaria);
    }
    else {
        res.status(404).json({
            msg: `No existe un maquinaria con el id ${id}`
        });
    }
});
exports.getMaquinaria = getMaquinaria;
const postMaquinaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const maq = maquinaria_1.default.build(body);
        yield maq.save();
        res.json(maq);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postMaquinaria = postMaquinaria;
const putMaquinaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const maq = yield maquinaria_1.default.findByPk(id);
        if (!maq) {
            return res.status(404).json({
                msg: 'No existe un maq con el id ' + id
            });
        }
        yield maq.update(body);
        res.json(maq);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putMaquinaria = putMaquinaria;
const deleteMaquinaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maq = yield maquinaria_1.default.findByPk(id);
    if (!maq) {
        return res.status(404).json({
            msg: 'No existe un maquinaria con el id ' + id
        });
    }
    yield maq.update({ estado: false });
    // await maq.destroy();
    res.json(maq);
});
exports.deleteMaquinaria = deleteMaquinaria;
//# sourceMappingURL=maquinarias.js.map