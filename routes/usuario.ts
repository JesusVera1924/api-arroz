import { Router } from 'express';
import { getUsuario, getUsuarios, login, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';


const router = Router();


router.get('/', getUsuarios);
router.post('/login', login);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);



export default router;