"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planificacion_1 = require("../controllers/planificacion");
const router = (0, express_1.Router)();
router.get('/', planificacion_1.getPlanificaciones);
router.get('/:id', planificacion_1.getPlanificacion);
router.post('/', planificacion_1.postPlanificacion);
router.put('/:id', planificacion_1.putPlanificacion);
router.delete('/:id', planificacion_1.deletePlanificacion);
exports.default = router;
//# sourceMappingURL=planificacion.js.map