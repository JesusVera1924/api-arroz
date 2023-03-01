import { Router } from 'express';
import { getPersona, getPersonas, getPersonaUsuario, postPersona, putPersona, deletePersona } from '../controllers/personas';


const router = Router();


router.get('/', getPersonas);
router.get('/:id', getPersona);
router.get('/usuario/:id', getPersonaUsuario);
router.post('/', postPersona);
router.put('/:id', putPersona);
router.delete('/:id', deletePersona);



export default router;