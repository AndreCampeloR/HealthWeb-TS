import { Request, Response } from 'express';
import * as medicoOperadoraRepository from '../repositories/medicoOperadoraRepository';

export const vincularMedicoOperadora = async (req: Request, res: Response) => {
  try {
    const { medicoId, operadoraId } = req.body;
    const novoVinculo = await medicoOperadoraRepository.createVinculo({medicoId, operadoraId});
    return res.status(201).json(novoVinculo);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const buscarOperadorasPorMedico = async (req: Request, res: Response) => {
  try {
    const medicoId = parseInt(req.params.medicoId);
    const vinculos = await medicoOperadoraRepository.getOperadorasByMedico(medicoId);
    return res.json(vinculos);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const buscarMedicosPorOperadora = async (req: Request, res: Response) => {
  try {
    const operadoraId = parseInt(req.params.operadoraId);
    const vinculos = await medicoOperadoraRepository.getMedicosByOperadora(operadoraId);
    return res.json(vinculos);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const removerVinculo = async (req: Request, res: Response) => {
  try {
    const { medicoId, operadoraId } = req.body;
    await medicoOperadoraRepository.deleteVinculo({medicoId, operadoraId});
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};
