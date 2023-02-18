import { Router } from 'express';
import { getTiposMaquinariases, getTiposMaquinarias, postTiposMaquinarias, putTiposMaquinarias, deleteTiposMaquinarias } from '../controllers/tiposmaquinarias';


const router = Router();


router.get('/', getTiposMaquinariases);
router.get('/:id', getTiposMaquinarias);
router.post('/', postTiposMaquinarias);
router.put('/:id', putTiposMaquinarias);
router.delete('/:id', deleteTiposMaquinarias);



export default router;