import { Router } from 'express';
import {
  actualizarTicket,
  detalleTicket,
  eliminarTicket,
  listarTicket,
  registrarTicket,
} from '../controllers/tickets_controller.js';
import verificarAutenticacion from '../middlewares/autenticacion.js';

const router = Router();

router.get('/tickets', verificarAutenticacion, listarTicket);
router.get('/ticket/:id', verificarAutenticacion, detalleTicket);
router.post('/ticket/registro', verificarAutenticacion, registrarTicket);
router.put('/ticket/actualizar/:id', verificarAutenticacion, actualizarTicket);
router.delete('/ticket/eliminar/:id', verificarAutenticacion, eliminarTicket);

export default router;
