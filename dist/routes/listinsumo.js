"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listinsumo_1 = require("../controllers/listinsumo");
const router = (0, express_1.Router)();
router.get('/', listinsumo_1.getListInsumos);
router.get('/:id', listinsumo_1.getListInsumo);
router.post('/', listinsumo_1.postListInsumo);
router.put('/:id', listinsumo_1.putListInsumo);
router.delete('/:id', listinsumo_1.deleteListInsumo);
exports.default = router;
//# sourceMappingURL=listinsumo.js.map