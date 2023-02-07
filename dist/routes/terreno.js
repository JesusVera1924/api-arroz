"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const terrenos_1 = require("../controllers/terrenos");
const router = (0, express_1.Router)();
router.get('/', terrenos_1.getTerrenos);
router.get('/:id', terrenos_1.getTerreno);
router.post('/', terrenos_1.postTerreno);
router.put('/:id', terrenos_1.putTerreno);
router.delete('/:id', terrenos_1.deleteTerreno);
exports.default = router;
//# sourceMappingURL=terreno.js.map