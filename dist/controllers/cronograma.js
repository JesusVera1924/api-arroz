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
exports.deleteCronograma = exports.putCronograma = exports.postCronograma = exports.getCronograma = exports.getCronogramas = void 0;
const cronograma_1 = __importDefault(require("../models/cronograma"));
const getCronogramas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cronograma = yield cronograma_1.default.findAll();
        res.json(cronograma);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCronogramas = getCronogramas;
const getCronograma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cronograma = yield cronograma_1.default.findByPk(id);
    if (cronograma) {
        res.json(cronograma);
    }
    else {
        res.status(404).json({
            msg: `No existe un cronograma con el id ${id}`
        });
    }
});
exports.getCronograma = getCronograma;
const postCronograma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const cronograma = cronograma_1.default.build(body);
        yield cronograma.save();
        res.json(cronograma);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postCronograma = postCronograma;
const putCronograma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cronograma = yield cronograma_1.default.findByPk(id);
        if (!cronograma) {
            return res.status(404).json({
                msg: 'No existe un cronograma con el id ' + id
            });
        }
        yield cronograma.update(body);
        res.json(cronograma);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCronograma = putCronograma;
const deleteCronograma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cronograma = yield cronograma_1.default.findByPk(id);
    if (!cronograma) {
        return res.status(404).json({
            msg: 'No existe un cronograma con el id ' + id
        });
    }
    yield cronograma.update({ estado: false });
    // await cronograma.destroy();
    res.json(cronograma);
});
exports.deleteCronograma = deleteCronograma;
//# sourceMappingURL=cronograma.js.map