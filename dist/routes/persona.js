"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personas_1 = require("../controllers/personas");
const router = (0, express_1.Router)();
router.get('/', personas_1.getPersonas);
router.get('/:id', personas_1.getPersona);
router.get('/usuario/:id', personas_1.getPersonaUsuario);
router.post('/', personas_1.postPersona);
router.put('/:id', personas_1.putPersona);
router.delete('/:id', personas_1.deletePersona);
exports.default = router;
//# sourceMappingURL=persona.js.map