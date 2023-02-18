"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposinsumos_1 = require("../controllers/tiposinsumos");
const router = (0, express_1.Router)();
router.get('/', tiposinsumos_1.getTiposinsumoses);
router.get('/:id', tiposinsumos_1.getTiposinsumos);
router.post('/', tiposinsumos_1.postTiposinsumos);
router.put('/:id', tiposinsumos_1.putTiposinsumos);
router.delete('/:id', tiposinsumos_1.deleteTiposinsumos);
exports.default = router;
//# sourceMappingURL=tiposinsumos.js.map