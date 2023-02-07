import { Router } from 'express';
import { getListMaquinarias, getListMaquinaria, postListMaquinarias, putListMaquinarias, deleteListMaquinarias } from '../controllers/listmaquinarias';


const router = Router();


router.get('/', getListMaquinarias);
router.get('/:id', getListMaquinaria);
router.post('/', postListMaquinarias);
router.put('/:id', putListMaquinarias);
router.delete('/:id', deleteListMaquinarias);



export default router;