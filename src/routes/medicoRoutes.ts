import { Router } from 'express';
import * as medicoController from '../controllers/medicoController';

const router = Router();

router.post('/', medicoController.criarMedico);
router.get('/', medicoController.listarMedicos);
router.get('/:id', medicoController.buscarMedicoPorId);
router.put('/:id', medicoController.atualizarMedico);
router.delete('/:id', medicoController.deletarMedico);

export default router;
