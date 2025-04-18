"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpresa = exports.updateEmpresa = exports.getEmpresaById = exports.getAllEmpresas = exports.createEmpresa = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createEmpresa = async (data) => {
    try {
        const empresa = await prisma.empresa.create({
            data,
        });
        return empresa;
    }
    catch (error) {
        throw new Error('Erro ao criar empresa: ' + error);
    }
};
exports.createEmpresa = createEmpresa;
const getAllEmpresas = async () => {
    try {
        const empresas = await prisma.empresa.findMany();
        return empresas;
    }
    catch (error) {
        throw new Error('Erro ao buscar empresas: ' + error);
    }
};
exports.getAllEmpresas = getAllEmpresas;
const getEmpresaById = async (id) => {
    try {
        const empresa = await prisma.empresa.findUnique({
            where: { id },
        });
        return empresa;
    }
    catch (error) {
        throw new Error('Erro ao buscar empresa: ' + error);
    }
};
exports.getEmpresaById = getEmpresaById;
const updateEmpresa = async (id, data) => {
    try {
        const empresa = await prisma.empresa.update({
            where: { id },
            data,
        });
        return empresa;
    }
    catch (error) {
        throw new Error('Erro ao atualizar empresa: ' + error);
    }
};
exports.updateEmpresa = updateEmpresa;
const deleteEmpresa = async (id) => {
    try {
        await prisma.empresa.delete({
            where: { id },
        });
    }
    catch (error) {
        throw new Error('Erro ao deletar empresa: ' + error);
    }
};
exports.deleteEmpresa = deleteEmpresa;
