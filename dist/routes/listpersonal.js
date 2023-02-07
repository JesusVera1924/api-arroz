"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listpersonal_1 = require("../controllers/listpersonal");
const router = (0, express_1.Router)();
router.get('/', listpersonal_1.getListPersonals);
router.get('/:id', listpersonal_1.getListPersonal);
router.post('/', listpersonal_1.postListPersonal);
router.put('/:id', listpersonal_1.putListPersonal);
router.delete('/:id', listpersonal_1.deleteListPersonal);
exports.default = router;
//# sourceMappingURL=listpersonal.js.map