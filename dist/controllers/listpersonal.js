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
exports.deleteListPersonal = exports.putListPersonal = exports.postListPersonal = exports.getListPersonal = exports.getListPersonals = void 0;
const listpersonal_1 = __importDefault(require("../models/listpersonal"));
const getListPersonals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lispersonal = yield listpersonal_1.default.findAll();
        res.json(lispersonal);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getListPersonals = getListPersonals;
const getListPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield listpersonal_1.default.findByPk(id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({
            msg: `No existe un task con el id ${id}`
        });
    }
});
exports.getListPersonal = getListPersonal;
const postListPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const task = listpersonal_1.default.build(body);
        yield task.save();
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postListPersonal = postListPersonal;
const putListPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const listPersonal = yield listpersonal_1.default.findByPk(id);
        if (!listPersonal) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }
        yield listPersonal.update(body);
        res.json(listPersonal);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListPersonal = putListPersonal;
const deleteListPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listPersonal = yield listpersonal_1.default.findByPk(id);
    if (!listPersonal) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield listPersonal.update({ estado: false });
    // await finca.destroy();
    res.json(listPersonal);
});
exports.deleteListPersonal = deleteListPersonal;
//# sourceMappingURL=listpersonal.js.map