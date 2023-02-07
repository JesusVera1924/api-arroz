import { Router } from 'express';
import { getPersona, getPersonas, postPersona, putPersona, deletePersona } from '../controllers/personas';


const router = Router();


router.get('/', getPersonas);
router.get('/:id', getPersona);
router.post('/', postPersona);
router.put('/:id', putPersona);
router.delete('/:id', deletePersona);



export default router;