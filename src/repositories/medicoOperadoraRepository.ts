import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createVinculo = async (data: { medicoId: number, operadoraId: number }) => {
  try {
    const medicoOperadora = await prisma.associacao_Medico_Operadora.create({
      data,
    });
    return medicoOperadora;
  } catch (error) {
    throw new Error('Erro ao vincular Medico e operadora: ' + error);
  }
};

export const getOperadorasByMedico = async (medicoId: number) => {
  try {
    const operadoras = await prisma.associacao_Medico_Operadora.findMany({
      where: { medicoId },
    });
    return operadoras;
  } catch (error) {
    throw new Error('Erro ao buscar operadoras: ' + error);
  }
};

export const getMedicosByOperadora = async (operadoraId: number) => {
    try {
      const medicos = await prisma.associacao_Medico_Operadora.findMany({
        where: { operadoraId },
      });
      return medicos;
    } catch (error) {
      throw new Error('Erro ao buscar medicos: ' + error);
    }
  };

  export const deleteVinculo = async (data: { medicoId: number, operadoraId: number }) => {
    try {
      await prisma.associacao_Medico_Operadora.deleteMany({
        where: {
          medicoId: data.medicoId,
          operadoraId: data.operadoraId,
        }
      });
    } catch (error) {
      throw new Error('Erro ao deletar vínculo: ' + error);
    }
  };
  
