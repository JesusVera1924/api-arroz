"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposplagas_1 = require("../controllers/tiposplagas");
const router = (0, express_1.Router)();
router.get('/', tiposplagas_1.getTiposPlagases);
router.get('/:id', tiposplagas_1.getTiposPlagas);
router.post('/', tiposplagas_1.postTiposPlagas);
router.put('/:id', tiposplagas_1.putTiposPlagas);
router.delete('/:id', tiposplagas_1.deleteTiposPlagas);
exports.default = router;
//# sourceMappingURL=tiposplagas.js.map