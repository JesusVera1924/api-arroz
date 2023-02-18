import { Router } from 'express';
import { getDetallePlanificaciones, getDetallePlanificacion, postDetallePlanificacion, putDetallePlanificacion, deleteDetallePlanificacion } from '../controllers/detalleplanificacion';


const router = Router();


router.get('/', getDetallePlanificaciones);
router.get('/:id', getDetallePlanificacion);
router.post('/', postDetallePlanificacion);
router.put('/:id', putDetallePlanificacion);
router.delete('/:id', deleteDetallePlanificacion);



export default router;