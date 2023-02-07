import { Router } from 'express';
import { getCronogramas, getCronograma, postCronograma, putCronograma, deleteCronograma } from '../controllers/cronograma';


const router = Router();


router.get('/', getCronogramas);
router.get('/:id', getCronograma);
router.post('/', postCronograma);
router.put('/:id', putCronograma);
router.delete('/:id', deleteCronograma);



export default router;