"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listtask_1 = require("../controllers/listtask");
const router = (0, express_1.Router)();
router.get('/', listtask_1.getListTasks);
router.get('/:id', listtask_1.getListTask);
router.post('/tareas/', listtask_1.getListTasksUsuario);
router.post('/', listtask_1.postListTask);
router.put('/:id', listtask_1.putListTask);
router.delete('/:id', listtask_1.deleteListTask);
exports.default = router;
//# sourceMappingURL=listtask.js.map