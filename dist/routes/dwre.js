"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dwre_1 = require("../controllers/dwre");
const router = (0, express_1.Router)();
router.get('/', dwre_1.getDwres);
router.get('/:id', dwre_1.getDwre);
router.post('/', dwre_1.postDwre);
router.put('/:id', dwre_1.putDwere);
router.delete('/:id', dwre_1.deleteDwre);
exports.default = router;
//# sourceMappingURL=dwre.js.map