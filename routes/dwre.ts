import { Router } from 'express';
import { getDwres, getDwre, postDwre, putDwere, deleteDwre } from '../controllers/dwre';


const router = Router();


router.get('/', getDwres);
router.get('/:id', getDwre);
router.post('/', postDwre);
router.put('/:id', putDwere);
router.delete('/:id', deleteDwre);



export default router;