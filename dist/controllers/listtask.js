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
exports.deleteListTask = exports.putListTask = exports.postListTask = exports.getListTask = exports.getListTasksUsuario = exports.getListTasks = void 0;
const listtask_1 = __importDefault(require("../models/listtask"));
const getListTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield listtask_1.default.findAll();
    res.json(task);
});
exports.getListTasks = getListTasks;
const getListTasksUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const task = yield listtask_1.default.findAll({
        where: {
            referencia: body.referencia,
            estado: body.obs
        }
    });
    res.json(task);
});
exports.getListTasksUsuario = getListTasksUsuario;
const getListTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield listtask_1.default.findByPk(id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({
            msg: `No existe un task con el id ${id}`
        });
    }
});
exports.getListTask = getListTask;
const postListTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const task = listtask_1.default.build(body);
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
exports.postListTask = postListTask;
const putListTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const task = yield listtask_1.default.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: 'No existe un task con el id ' + id
            });
        }
        yield task.update(body);
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putListTask = putListTask;
const deleteListTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield listtask_1.default.findByPk(id);
    if (!task) {
        return res.status(404).json({
            msg: 'No existe un task con el id ' + id
        });
    }
    yield task.update({ estado: false });
    // await task.destroy();
    res.json(task);
});
exports.deleteListTask = deleteListTask;
//# sourceMappingURL=listtask.js.map