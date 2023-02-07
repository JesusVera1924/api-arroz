"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fincas_1 = require("../controllers/fincas");
const router = (0, express_1.Router)();
router.get('/', fincas_1.getFincas);
router.get('/:id', fincas_1.getFinca);
router.post('/', fincas_1.postFinca);
router.put('/:id', fincas_1.putFinca);
router.delete('/:id', fincas_1.deleteFinca);
exports.default = router;
//# sourceMappingURL=finca.js.map