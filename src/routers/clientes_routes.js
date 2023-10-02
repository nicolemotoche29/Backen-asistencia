import { Router } from 'express';
import {
  listarClientes,
  detalleCliente,
  registrarCliente,
  actualizarCliente,
  eliminarCliente,
} from '../controllers/clientes_controller.js';
import verificarAutenticacion from '../middlewares/autenticacion.js';

const router = Router();

router.get('/clientes', verificarAutenticacion, listarClientes);
router.get('/cliente/:id', verificarAutenticacion, detalleCliente);
router.post('/cliente/registro', verificarAutenticacion, registrarCliente);
router.put('/cliente/actualizar/:id', verificarAutenticacion, actualizarCliente);
router.delete('/cliente/eliminar/:id', verificarAutenticacion, eliminarCliente);

export default router;
 