import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createEmpresa = async (data: { cnpj: string, nome: string, email: string, senha: string, telefone: string }) => {
  try {
    const empresa = await prisma.empresa.create({
      data,
    });
    return empresa;
  } catch (error) {
    throw new Error('Erro ao criar empresa: ' + error);
  }
};

export const getAllEmpresas = async () => {
  try {
    const empresas = await prisma.empresa.findMany();
    return empresas;
  } catch (error) {
    throw new Error('Erro ao buscar empresas: ' + error);
  }
};

export const getEmpresaById = async (id: number) => {
  try {
    const empresa = await prisma.empresa.findUnique({
      where: { id },
    });
    return empresa;
  } catch (error) {
    throw new Error('Erro ao buscar empresa: ' + error);
  }
};

export const updateEmpresa = async (id: number, data: { cnpj?: string, nome?: string, email?: string, senha?: string, telefone?: string }) => {
  try {
    const empresa = await prisma.empresa.update({
      where: { id },
      data,
    });
    return empresa;
  } catch (error) {
    throw new Error('Erro ao atualizar empresa: ' + error);
  }
};

export const deleteEmpresa = async (id: number) => {
  try {
    await prisma.empresa.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Erro ao deletar empresa: ' + error);
  }
};
