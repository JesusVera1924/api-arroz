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
exports.deleteDetallePlanificacion = exports.putDetallePlanificacion = exports.postDetallePlanificacion = exports.getDetallePlanificacion = exports.getDetalleUsuariosPlanificaciones = exports.getDetallePlanificaciones = void 0;
const detalleplanificacion_1 = __importDefault(require("../models/detalleplanificacion"));
const listpersonal_1 = __importDefault(require("../models/listpersonal"));
const getDetallePlanificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detallesPlanificacion = yield detalleplanificacion_1.default.findAll({
        where: {
            estado: 1,
        }
    });
    res.json(detallesPlanificacion);
});
exports.getDetallePlanificaciones = getDetallePlanificaciones;
const getDetalleUsuariosPlanificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req; /// CODIGO DE USUARIO Y ESTADO
        var list3 = [];
        const detalleAct = yield listpersonal_1.default.findAll({
            where: {
                idPersonal: body.referencia, //P-01
            }
        });
        // TODO LOS REGISTROS DE DETALLE DE ACTIVIDADES QUE ESTA VINCULADO EL USUARIO QUE ESTA LOGEADO EN LA APP
        for (let numero of detalleAct) {
            // OBJETO DEL DETALLE DE ACTIVIDAD
            //console.log(numero.dataValues.idPlanificacion);
            const detallesPlanificacion2 = yield detalleplanificacion_1.default.findAll({
                where: {
                    iddetalleplanificacion: numero.dataValues.idPlanificacion,
                    estado: 1,
                }
            });
            //----> AGREGAR ESTA SOBREESCRIBIENDO
            for (let numero of detallesPlanificacion2) {
                list3.push(numero);
                console.log(list3.length);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
    res.json(list3);
});
exports.getDetalleUsuariosPlanificaciones = getDetalleUsuariosPlanificaciones;
const getDetallePlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detallesPlanificacion = yield detalleplanificacion_1.default.findByPk(id);
    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    }
    else {
        res.status(404).json({
            msg: `No existe un detallePlanificacion con el id ${id}`
        });
    }
});
exports.getDetallePlanificacion = getDetallePlanificacion;
const postDetallePlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const detallePlanificacion = detalleplanificacion_1.default.build(body);
        yield detallePlanificacion.save();
        res.json(detallePlanificacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDetallePlanificacion = postDetallePlanificacion;
const putDetallePlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const detallePlanificacion = yield detalleplanificacion_1.default.findByPk(id);
        if (!detallePlanificacion) {
            return res.status(404).json({
                msg: 'No existe un detallePlanificacion con el id ' + id
            });
        }
        yield detallePlanificacion.update(body);
        res.json(detallePlanificacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putDetallePlanificacion = putDetallePlanificacion;
const deleteDetallePlanificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detallePlanificacion = yield detalleplanificacion_1.default.findByPk(id);
    if (!detallePlanificacion) {
        return res.status(404).json({
            msg: 'No existe un detallePlanificacion con el id ' + id
        });
    }
    yield detallePlanificacion.update({ estado: false });
    // await detallePlanificacion.destroy();
    res.json(detallePlanificacion);
});
exports.deleteDetallePlanificacion = deleteDetallePlanificacion;
//# sourceMappingURL=detalleplanificacion.js.map