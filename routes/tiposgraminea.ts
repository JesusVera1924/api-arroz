import { Router } from 'express';
import { getTipoGramineaes, getTipoGraminea, postTipoGraminea, putTipoGraminea, deleteTipoGraminea } from '../controllers/tiposgraminea';


const router = Router();


router.get('/', getTipoGramineaes);
router.get('/:id', getTipoGraminea);
router.post('/', postTipoGraminea);
router.put('/:id', putTipoGraminea);
router.delete('/:id', deleteTipoGraminea);



export default router;