import { Request, Response } from 'express';
import * as medicoRepository from '../repositories/medicoRepository';

export const criarMedico = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, cpf } = req.body;
    const novoMedico = await medicoRepository.createMedico({ nome, email, telefone, cpf });
    return res.status(201).json(novoMedico);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const listarMedicos = async (req: Request, res: Response) => {
  try {
    const medicos = await medicoRepository.getAllMedicos();
    return res.json(medicos);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const buscarMedicoPorId = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const medico = await medicoRepository.getMedicoById(id);
    if (!medico) return res.status(404).json({ erro: 'Médico não encontrado' });
    return res.json(medico);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const atualizarMedico = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;
    const medicoAtualizado = await medicoRepository.updateMedico(id, dados);
    return res.json(medicoAtualizado);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const deletarMedico = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await medicoRepository.deleteMedico(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};
