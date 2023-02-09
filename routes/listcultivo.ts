import { Router } from 'express';
import { getListCultivo, getListCultivos, postListCultivo, putListCultivo, deleteListCultivo } from '../controllers/listcultivo';


const router = Router();


router.get('/', getListCultivo);
router.get('/:id', getListCultivos);
router.post('/', postListCultivo);
router.put('/:id', putListCultivo);
router.delete('/:id', deleteListCultivo);



export default router;