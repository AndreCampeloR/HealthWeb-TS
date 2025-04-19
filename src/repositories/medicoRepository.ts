import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createMedico = async (data: { cpf: string, nome: string, email: string, telefone: string }) => {
  try {
    const medico = await prisma.medico.create({
      data,
    });
    return medico;
  } catch (error) {
    throw new Error('Erro ao criar medico: ' + error);
  }
};

export const getAllMedicos = async () => {
  try {
    const medicos = await prisma.medico.findMany();
    return medicos;
  } catch (error) {
    throw new Error('Erro ao buscar medicos: ' + error);
  }
};

export const getMedicoById = async (id: number) => {
  try {
    const medico = await prisma.medico.findUnique({
      where: { id },
    });
    return medico;
  } catch (error) {
    throw new Error('Erro ao buscar medico: ' + error);
  }
};

export const updateMedico = async (id: number, data: { cpf?: string, nome?: string, email?: string, telefone?: string }) => {
  try {
    const medico = await prisma.medico.update({
      where: { id },
      data,
    });
    return medico;
  } catch (error) {
    throw new Error('Erro ao atualizar medico: ' + error);
  }
};

export const deleteMedico = async (id: number) => {
  try {
    await prisma.medico.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Erro ao deletar medico: ' + error);
  }
};
