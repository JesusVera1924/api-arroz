"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listcultivo_1 = require("../controllers/listcultivo");
const router = (0, express_1.Router)();
router.get('/', listcultivo_1.getListCultivo);
router.get('/:id', listcultivo_1.getListCultivos);
router.post('/', listcultivo_1.postListCultivo);
router.put('/:id', listcultivo_1.putListCultivo);
router.delete('/:id', listcultivo_1.deleteListCultivo);
exports.default = router;
//# sourceMappingURL=listcultivo.js.map