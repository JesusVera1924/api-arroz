"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposmaquinarias_1 = require("../controllers/tiposmaquinarias");
const router = (0, express_1.Router)();
router.get('/', tiposmaquinarias_1.getTiposMaquinariases);
router.get('/:id', tiposmaquinarias_1.getTiposMaquinarias);
router.post('/', tiposmaquinarias_1.postTiposMaquinarias);
router.put('/:id', tiposmaquinarias_1.putTiposMaquinarias);
router.delete('/:id', tiposmaquinarias_1.deleteTiposMaquinarias);
exports.default = router;
//# sourceMappingURL=tiposmaquinarias.js.map