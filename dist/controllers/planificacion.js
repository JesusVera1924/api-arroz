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
exports.deletePlanificacion = exports.putPlanificacion = exports.postPlanificacion = exports.getPlanificacion = exports.getPlanificaciones = void 0;
const finca_1 = __importDefault(require("../models/finca"));
const planificacion_1 = __importDefault(require("../models/planificacion"));
const getPlanificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planificacion = yield planificacion_1.default.findAll({
        include: [finca_1.default],
        where: {
            estado: 1,
        }
    });
    res.json(planificacion);
});
exports.getPlanificaciones = getPlanificaciones;
const getPlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detallesPlanificacion = yield planificacion_1.default.findByPk(id);
    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    }
    else {
        res.status(404).json({
            msg: `No existe un Planificacion con el id ${id}`
        });
    }
});
exports.getPlanificacion = getPlanificacion;
const postPlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const planificacion = planificacion_1.default.build(body);
        yield planificacion.save();
        res.json(planificacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPlanificacion = postPlanificacion;
const putPlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const planificacion = yield planificacion_1.default.findByPk(id);
        if (!planificacion) {
            return res.status(404).json({
                msg: 'No existe un Planificacion con el id ' + id
            });
        }
        yield planificacion.update(body);
        res.json(planificacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPlanificacion = putPlanificacion;
const deletePlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const planificacion = yield planificacion_1.default.findByPk(id);
    if (!planificacion) {
        return res.status(404).json({
            msg: 'No existe un Planificacion con el id ' + id
        });
    }
    yield planificacion.update({ estado: false });
    // await Planificacion.destroy();
    res.json(planificacion_1.default);
});
exports.deletePlanificacion = deletePlanificacion;
//# sourceMappingURL=planificacion.js.map