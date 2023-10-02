import { Router } from 'express';
import {
  listarTecnicos,
  detalleTecnico,
  registrarTecnico,
  actualizarTecnico,
  eliminarTecnico,
} from '../controllers/tecnicos_controller.js';
import verificarAutenticacion from '../middlewares/autenticacion.js';

const router = Router();

router.get('/tecnicos', verificarAutenticacion, listarTecnicos);
router.get('/tecnico/:id', verificarAutenticacion, detalleTecnico);
router.post('/tecnico/registro', verificarAutenticacion, registrarTecnico);
router.put('/tecnico/actualizar/:id', verificarAutenticacion, actualizarTecnico);
router.delete('/tecnico/eliminar/:id', verificarAutenticacion, eliminarTecnico);

export default router;
