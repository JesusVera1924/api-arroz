import { Router } from 'express';
import { getTask, getTasks, postTask, putTask, deleteTask } from '../controllers/task';


const router = Router();


router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', postTask);
router.put('/:id', putTask);
router.delete('/:id', deleteTask);



export default router;