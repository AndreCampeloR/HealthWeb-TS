import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOperadora = async (data: { nome: string, empresaId: number }) => {
  try {
    const operadora = await prisma.operadora.create({
      data,
    });
    return operadora;
  } catch (error) {
    throw new Error('Erro ao criar operadora: ' + error);
  }
};

export const getAllOperadoras = async () => {
  try {
    const operadora = await prisma.operadora.findMany();
    return operadora;
  } catch (error) {
    throw new Error('Erro ao buscar operadoras: ' + error);
  }
};

export const getOperadoraById = async (id: number) => {
  try {
    const operadora = await prisma.operadora.findUnique({
      where: { id },
    });
    return operadora;
  } catch (error) {
    throw new Error('Erro ao buscar operadora: ' + error);
  }
};

export const updateOperadora = async (id: number, data: { nome?: string, empresaId?: number }) => {
  try {
    const operadora = await prisma.operadora.update({
      where: { id },
      data,
    });
    return operadora;
  } catch (error) {
    throw new Error('Erro ao atualizar operadora: ' + error);
  }
};

export const deleteOperadora = async (id: number) => {
  try {
    await prisma.operadora.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Erro ao deletar operadora: ' + error);
  }
};
