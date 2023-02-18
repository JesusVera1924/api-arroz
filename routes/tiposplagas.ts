import { Router } from 'express';
import { getTiposPlagases, getTiposPlagas, postTiposPlagas, putTiposPlagas, deleteTiposPlagas } from '../controllers/tiposplagas';


const router = Router();


router.get('/', getTiposPlagases);
router.get('/:id', getTiposPlagas);
router.post('/', postTiposPlagas);
router.put('/:id', putTiposPlagas);
router.delete('/:id', deleteTiposPlagas);



export default router;