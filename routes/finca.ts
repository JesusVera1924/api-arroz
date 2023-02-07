import { Router } from 'express';
import { getFinca, getFincas, postFinca, putFinca, deleteFinca } from '../controllers/fincas';


const router = Router();


router.get('/', getFincas);
router.get('/:id', getFinca);
router.post('/', postFinca);
router.put('/:id', putFinca);
router.delete('/:id', deleteFinca);



export default router;