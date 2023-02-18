"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposenfermedades_1 = require("../controllers/tiposenfermedades");
const router = (0, express_1.Router)();
router.get('/', tiposenfermedades_1.getTipoenfermedadeses);
router.get('/:id', tiposenfermedades_1.getTipoenfermedades);
router.post('/', tiposenfermedades_1.postTipoenfermedades);
router.put('/:id', tiposenfermedades_1.putTipoenfermedades);
router.delete('/:id', tiposenfermedades_1.deleteTipoenfermedades);
exports.default = router;
//# sourceMappingURL=tiposenfermedades.js.map