import { Router } from 'express';
import { getListInsumo, getListInsumos, postListInsumo, putListInsumo, deleteListInsumo } from '../controllers/listinsumo';


const router = Router();


router.get('/', getListInsumos);
router.get('/:id', getListInsumo);
router.post('/', postListInsumo);
router.put('/:id', putListInsumo);
router.delete('/:id', deleteListInsumo);



export default router;