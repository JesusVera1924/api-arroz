"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listmaquinarias_1 = require("../controllers/listmaquinarias");
const router = (0, express_1.Router)();
router.get('/', listmaquinarias_1.getListMaquinarias);
router.get('/:id', listmaquinarias_1.getListMaquinaria);
router.post('/', listmaquinarias_1.postListMaquinarias);
router.put('/:id', listmaquinarias_1.putListMaquinarias);
router.delete('/:id', listmaquinarias_1.deleteListMaquinarias);
exports.default = router;
//# sourceMappingURL=listmaquinarias.js.map