import { Router } from 'express';
import { getTerreno, getTerrenos, getFincaAndTerrenos, postTerreno, putTerreno, deleteTerreno } from '../controllers/terrenos';


const router = Router();


router.get('/', getTerrenos);
router.get('/:id', getTerreno);
router.get('/listFinca/:id', getFincaAndTerrenos);
router.post('/', postTerreno);
router.put('/:id', putTerreno);
router.delete('/:id', deleteTerreno);



export default router;