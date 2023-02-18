import { Router } from 'express';
import { getTipoenfermedadeses, getTipoenfermedades, postTipoenfermedades, putTipoenfermedades, deleteTipoenfermedades } from '../controllers/tiposenfermedades';


const router = Router();


router.get('/', getTipoenfermedadeses);
router.get('/:id', getTipoenfermedades);
router.post('/', postTipoenfermedades);
router.put('/:id', putTipoenfermedades);
router.delete('/:id', deleteTipoenfermedades);



export default router;