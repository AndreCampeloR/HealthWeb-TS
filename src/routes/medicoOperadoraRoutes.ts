import { Router } from 'express';
import * as medicoOperadoraController from '../controllers/medicoOperadoraController';

const router = Router();

router.post('/', medicoOperadoraController.vincularMedicoOperadora);
router.get('/', medicoOperadoraController.buscarMedicosPorOperadora);
router.get('/:id', medicoOperadoraController.buscarOperadorasPorMedico);
router.delete('/:id', medicoOperadoraController.removerVinculo);

export default router;
