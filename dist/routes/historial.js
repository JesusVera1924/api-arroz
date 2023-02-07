"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historial_1 = require("../controllers/historial");
const router = (0, express_1.Router)();
router.get('/', historial_1.getHistorials);
router.get('/:id', historial_1.getHistorial);
router.post('/', historial_1.postHistorial);
router.put('/:id', historial_1.putHistorial);
router.delete('/:id', historial_1.deleteHistorial);
exports.default = router;
//# sourceMappingURL=historial.js.map