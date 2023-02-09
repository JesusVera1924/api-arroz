import { Router } from 'express';
import { getListterreno, getListterrenos, postListterreno, putListterreno, deleteListterreno } from '../controllers/listerrenos';


const router = Router();


router.get('/', getListterrenos);
router.get('/:id', getListterreno);
router.post('/', postListterreno);
router.put('/:id', putListterreno);
router.delete('/:id', deleteListterreno);



export default router;