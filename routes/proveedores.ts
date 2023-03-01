import { Router } from 'express';
import { getProveedor, getProveedores, postProveedor, putProveedores, deleteProveedores } from '../controllers/proveedores';


const router = Router();


router.get('/', getProveedores);
router.get('/:id', getProveedor);
router.post('/', postProveedor);
router.put('/:id', putProveedores);
router.delete('/:id', deleteProveedores);



export default router;