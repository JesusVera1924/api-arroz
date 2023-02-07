import { Router } from 'express';
import { getTerreno, getTerrenos, postTerreno, putTerreno, deleteTerreno } from '../controllers/terrenos';


const router = Router();


router.get('/', getTerrenos);
router.get('/:id', getTerreno);
router.post('/', postTerreno);
router.put('/:id', putTerreno);
router.delete('/:id', deleteTerreno);



export default router;