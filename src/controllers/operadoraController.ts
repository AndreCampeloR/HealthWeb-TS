import { Request, Response } from 'express';
import * as operadoraRepository from '../repositories/operadoraRepository';

export const criarOperadora = async (req: Request, res: Response) => {
  try {
    const { nome, registroAns } = req.body;
    const novaOperadora = await operadoraRepository.createOperadora({ nome, registroAns });
    return res.status(201).json(novaOperadora);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const listarOperadoras = async (req: Request, res: Response) => {
  try {
    const operadoras = await operadoraRepository.getAllOperadoras();
    return res.json(operadoras);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const buscarOperadoraPorId = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const operadora = await operadoraRepository.getOperadoraById(id);
    if (!operadora) return res.status(404).json({ erro: 'Operadora não encontrada' });
    return res.json(operadora);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const atualizarOperadora = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;
    const operadoraAtualizada = await operadoraRepository.updateOperadora(id, dados);
    return res.json(operadoraAtualizada);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const deletarOperadora = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await operadoraRepository.deleteOperadora(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};
