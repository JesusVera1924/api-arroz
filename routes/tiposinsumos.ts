import { Router } from 'express';
import { getTiposinsumoses, getTiposinsumos, postTiposinsumos, putTiposinsumos, deleteTiposinsumos } from '../controllers/tiposinsumos';


const router = Router();


router.get('/', getTiposinsumoses);
router.get('/:id', getTiposinsumos);
router.post('/', postTiposinsumos);
router.put('/:id', putTiposinsumos);
router.delete('/:id', deleteTiposinsumos);



export default router;