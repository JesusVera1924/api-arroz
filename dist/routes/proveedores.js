"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_1 = require("../controllers/proveedores");
const router = (0, express_1.Router)();
router.get('/', proveedores_1.getProveedores);
router.get('/:id', proveedores_1.getProveedor);
router.post('/', proveedores_1.postProveedor);
router.put('/:id', proveedores_1.putProveedores);
router.delete('/:id', proveedores_1.deleteProveedores);
exports.default = router;
//# sourceMappingURL=proveedores.js.map