import { Router } from 'express';
import { getListTask, getListTasks, postListTask, putListTask, deleteListTask, getListTasksUsuario } from '../controllers/listtask';


const router = Router();


router.get('/', getListTasks);
router.get('/:id', getListTask);
router.post('/tareas/', getListTasksUsuario);
router.post('/', postListTask);
router.put('/:id', putListTask);
router.delete('/:id', deleteListTask);



export default router;