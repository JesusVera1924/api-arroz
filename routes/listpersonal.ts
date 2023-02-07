import { Router } from 'express';
import { getListPersonal, getListPersonals, postListPersonal, putListPersonal, deleteListPersonal } from '../controllers/listpersonal';


const router = Router();


router.get('/', getListPersonals);
router.get('/:id', getListPersonal);
router.post('/', postListPersonal);
router.put('/:id', putListPersonal);
router.delete('/:id', deleteListPersonal);



export default router;