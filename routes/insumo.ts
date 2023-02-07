import { Router } from 'express';
import { getInsumo, getInsumos, postInsumo, putInsumo, deleteInsumo } from '../controllers/insumos';


const router = Router();


router.get('/', getInsumos);
router.get('/:id', getInsumo);
router.post('/', postInsumo);
router.put('/:id', putInsumo);
router.delete('/:id', deleteInsumo);



export default router;