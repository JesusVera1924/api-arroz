"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalleplanificacion_1 = require("../controllers/detalleplanificacion");
const router = (0, express_1.Router)();
router.get('/', detalleplanificacion_1.getDetallePlanificaciones);
router.get('/:id', detalleplanificacion_1.getDetallePlanificacion);
router.post('/tareas/', detalleplanificacion_1.getDetalleUsuariosPlanificaciones);
router.post('/', detalleplanificacion_1.postDetallePlanificacion);
router.put('/:id', detalleplanificacion_1.putDetallePlanificacion);
router.delete('/:id', detalleplanificacion_1.deleteDetallePlanificacion);
exports.default = router;
//# sourceMappingURL=detalleplanificacion.js.map