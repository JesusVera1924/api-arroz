"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listerrenos_1 = require("../controllers/listerrenos");
const router = (0, express_1.Router)();
router.get('/', listerrenos_1.getListterrenos);
router.get('/:id', listerrenos_1.getListterreno);
router.post('/', listerrenos_1.postListterreno);
router.put('/:id', listerrenos_1.putListterreno);
router.delete('/:id', listerrenos_1.deleteListterreno);
exports.default = router;
//# sourceMappingURL=listerrenos.js.map