import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOperadora = async (data: { nome: string }) => {
  return prisma.operadora.create({ data });
};

export const getAllOperadoras = async () => {
  return prisma.operadora.findMany();
};

export const getOperadoraById = async (id: number) => {
  return prisma.operadora.findUnique({ where: { id } });
};

export const updateOperadora = async (id: number, data: { nome?: string }) => {
  return prisma.operadora.update({ where: { id }, data });
};

export const deleteOperadora = async (id: number) => {
  return prisma.operadora.delete({ where: { id } });
};
