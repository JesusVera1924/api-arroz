import { Router } from 'express';
import { getHistorials, getHistorial, postHistorial, putHistorial, deleteHistorial } from '../controllers/historial';


const router = Router();


router.get('/', getHistorials);
router.get('/:id', getHistorial);
router.post('/', postHistorial);
router.put('/:id', putHistorial);
router.delete('/:id', deleteHistorial);



export default router;