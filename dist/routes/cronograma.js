"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cronograma_1 = require("../controllers/cronograma");
const router = (0, express_1.Router)();
router.get('/', cronograma_1.getCronogramas);
router.get('/:id', cronograma_1.getCronograma);
router.post('/', cronograma_1.postCronograma);
router.put('/:id', cronograma_1.putCronograma);
router.delete('/:id', cronograma_1.deleteCronograma);
exports.default = router;
//# sourceMappingURL=cronograma.js.map