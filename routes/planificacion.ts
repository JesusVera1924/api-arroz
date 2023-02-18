import { Router } from 'express';
import { getPlanificaciones, getPlanificacion, postPlanificacion, putPlanificacion, deletePlanificacion } from '../controllers/planificacion';


const router = Router();


router.get('/', getPlanificaciones);
router.get('/:id', getPlanificacion);
router.post('/', postPlanificacion);
router.put('/:id', putPlanificacion);
router.delete('/:id', deletePlanificacion);



export default router;