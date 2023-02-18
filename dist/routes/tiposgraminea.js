"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposgraminea_1 = require("../controllers/tiposgraminea");
const router = (0, express_1.Router)();
router.get('/', tiposgraminea_1.getTipoGramineaes);
router.get('/:id', tiposgraminea_1.getTipoGraminea);
router.post('/', tiposgraminea_1.postTipoGraminea);
router.put('/:id', tiposgraminea_1.putTipoGraminea);
router.delete('/:id', tiposgraminea_1.deleteTipoGraminea);
exports.default = router;
//# sourceMappingURL=tiposgraminea.js.map