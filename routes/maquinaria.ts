import { Router } from 'express';
import { getMaquinaria, getMaquinarias, postMaquinaria, putMaquinaria, deleteMaquinaria } from '../controllers/maquinarias';


const router = Router();


router.get('/', getMaquinarias);
router.get('/:id', getMaquinaria);
router.post('/', postMaquinaria);
router.put('/:id', putMaquinaria);
router.delete('/:id', deleteMaquinaria);



export default router;