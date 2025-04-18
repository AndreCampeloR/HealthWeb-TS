import { Request, Response } from 'express';
import * as empresaRepository from '../repositories/empresaRepository';

export const criarEmpresa = async (req: Request, res: Response) =>{
  try {
    const { cnpj, nome, email, senha, telefone } = req.body;
    const novaEmpresa = await empresaRepository.createEmpresa({ cnpj, nome, email, senha, telefone });
    return res.status(201).json(novaEmpresa);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const listarEmpresas = async (req: Request, res: Response) : Promise<Response> => {
  try {
    const empresas = await empresaRepository.getAllEmpresas();
    return res.json(empresas);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const buscarEmpresaPorId = async (req: Request, res: Response) : Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const empresa = await empresaRepository.getEmpresaById(id);
    if (!empresa) return res.status(404).json({ erro: 'Empresa não encontrada' });
    return res.json(empresa);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const atualizarEmpresa = async (req: Request, res: Response) : Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;
    const empresaAtualizada = await empresaRepository.updateEmpresa(id, dados);
    return res.json(empresaAtualizada);
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};

export const deletarEmpresa = async (req: Request, res: Response) : Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    await empresaRepository.deleteEmpresa(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: (error as Error).message });
  }
};
