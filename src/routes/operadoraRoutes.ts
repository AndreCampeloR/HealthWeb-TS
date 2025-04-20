import { Router } from 'express';
import * as operadoraController from '../controllers/operadoraController';

const router = Router();

router.post('/', operadoraController.criarOperadora);
router.get('/', operadoraController.listarOperadoras);
router.get('/:id', operadoraController.buscarOperadoraPorId);
router.put('/:id', operadoraController.atualizarOperadora);
router.delete('/:id', operadoraController.deletarOperadora);

export default router;
