"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const insumos_1 = require("../controllers/insumos");
const router = (0, express_1.Router)();
router.get('/', insumos_1.getInsumos);
router.get('/:id', insumos_1.getInsumo);
router.post('/', insumos_1.postInsumo);
router.put('/:id', insumos_1.putInsumo);
router.delete('/:id', insumos_1.deleteInsumo);
exports.default = router;
//# sourceMappingURL=insumo.js.map