import { Router } from 'express';
import { getEnfermedad, getEnfermedades, postEnfermedad, putEnfermedad, deleteEnfermedad } from '../controllers/enfermedades';


const router = Router();


router.get('/', getEnfermedades);
router.get('/:id', getEnfermedad);
router.post('/', postEnfermedad);
router.put('/:id', putEnfermedad);
router.delete('/:id', deleteEnfermedad);



export default router;