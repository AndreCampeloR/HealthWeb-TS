import { Router } from 'express';
import * as empresaController from '../controllers/empresaController';

const router = Router();

router.post('/', empresaController.criarEmpresa);
//router.get('/', empresaController.listarEmpresas);
//router.get('/:id', empresaController.buscarEmpresaPorId);
//router.put('/:id', empresaController.atualizarEmpresa);
//router.delete('/:id', empresaController.deletarEmpresa);

export default router;
