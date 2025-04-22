"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVinculo = exports.getMedicosByOperadora = exports.getOperadorasByMedico = exports.createVinculo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createVinculo = async (data) => {
    try {
        const medicoOperadora = await prisma.associacao_Medico_Operadora.create({
            data,
        });
        return medicoOperadora;
    }
    catch (error) {
        throw new Error('Erro ao vincular Medico e operadora: ' + error);
    }
};
exports.createVinculo = createVinculo;
const getOperadorasByMedico = async (medicoId) => {
    try {
        const operadoras = await prisma.associacao_Medico_Operadora.findMany({
            where: { medicoId },
        });
        return operadoras;
    }
    catch (error) {
        throw new Error('Erro ao buscar operadoras: ' + error);
    }
};
exports.getOperadorasByMedico = getOperadorasByMedico;
const getMedicosByOperadora = async (operadoraId) => {
    try {
        const medicos = await prisma.associacao_Medico_Operadora.findMany({
            where: { operadoraId },
        });
        return medicos;
    }
    catch (error) {
        throw new Error('Erro ao buscar medicos: ' + error);
    }
};
exports.getMedicosByOperadora = getMedicosByOperadora;
const deleteVinculo = async (data) => {
    try {
        await prisma.associacao_Medico_Operadora.deleteMany({
            where: {
                medicoId: data.medicoId,
                operadoraId: data.operadoraId,
            }
        });
    }
    catch (error) {
        throw new Error('Erro ao deletar vínculo: ' + error);
    }
};
exports.deleteVinculo = deleteVinculo;
