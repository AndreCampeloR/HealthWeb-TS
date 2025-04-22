"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOperadora = exports.updateOperadora = exports.getOperadoraById = exports.getAllOperadoras = exports.createOperadora = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOperadora = async (data) => {
    try {
        const operadora = await prisma.operadora.create({
            data,
        });
        return operadora;
    }
    catch (error) {
        throw new Error('Erro ao criar operadora: ' + error);
    }
};
exports.createOperadora = createOperadora;
const getAllOperadoras = async () => {
    try {
        const operadora = await prisma.operadora.findMany();
        return operadora;
    }
    catch (error) {
        throw new Error('Erro ao buscar operadoras: ' + error);
    }
};
exports.getAllOperadoras = getAllOperadoras;
const getOperadoraById = async (id) => {
    try {
        const operadora = await prisma.operadora.findUnique({
            where: { id },
        });
        return operadora;
    }
    catch (error) {
        throw new Error('Erro ao buscar operadora: ' + error);
    }
};
exports.getOperadoraById = getOperadoraById;
const updateOperadora = async (id, data) => {
    try {
        const operadora = await prisma.operadora.update({
            where: { id },
            data,
        });
        return operadora;
    }
    catch (error) {
        throw new Error('Erro ao atualizar operadora: ' + error);
    }
};
exports.updateOperadora = updateOperadora;
const deleteOperadora = async (id) => {
    try {
        await prisma.operadora.delete({
            where: { id },
        });
    }
    catch (error) {
        throw new Error('Erro ao deletar operadora: ' + error);
    }
};
exports.deleteOperadora = deleteOperadora;
