"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maquinarias_1 = require("../controllers/maquinarias");
const router = (0, express_1.Router)();
router.get('/', maquinarias_1.getMaquinarias);
router.get('/:id', maquinarias_1.getMaquinaria);
router.post('/', maquinarias_1.postMaquinaria);
router.put('/:id', maquinarias_1.putMaquinaria);
router.delete('/:id', maquinarias_1.deleteMaquinaria);
exports.default = router;
//# sourceMappingURL=maquinaria.js.map