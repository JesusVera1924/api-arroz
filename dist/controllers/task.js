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
exports.deleteTask = exports.putTask = exports.postTask = exports.getTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findAll();
        res.json(task);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({
            msg: `No existe un task con el id ${id}`
        });
    }
});
exports.getTask = getTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const task = task_1.default.build(body);
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
exports.postTask = postTask;
const putTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const task = yield task_1.default.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
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
exports.putTask = putTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (!task) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }
    yield task.update({ estado: false });
    // await finca.destroy();
    res.json(task);
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map