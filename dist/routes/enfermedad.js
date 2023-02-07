"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enfermedades_1 = require("../controllers/enfermedades");
const router = (0, express_1.Router)();
router.get('/', enfermedades_1.getEnfermedades);
router.get('/:id', enfermedades_1.getEnfermedad);
router.post('/', enfermedades_1.postEnfermedad);
router.put('/:id', enfermedades_1.putEnfermedad);
router.delete('/:id', enfermedades_1.deleteEnfermedad);
exports.default = router;
//# sourceMappingURL=enfermedad.js.map