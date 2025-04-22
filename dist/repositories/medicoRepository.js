"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedico = exports.updateMedico = exports.getMedicoById = exports.getAllMedicos = exports.createMedico = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createMedico = async (data) => {
    try {
        const medico = await prisma.medico.create({
            data,
        });
        return medico;
    }
    catch (error) {
        throw new Error('Erro ao criar medico: ' + error);
    }
};
exports.createMedico = createMedico;
const getAllMedicos = async () => {
    try {
        const medicos = await prisma.medico.findMany();
        return medicos;
    }
    catch (error) {
        throw new Error('Erro ao buscar medicos: ' + error);
    }
};
exports.getAllMedicos = getAllMedicos;
const getMedicoById = async (id) => {
    try {
        const medico = await prisma.medico.findUnique({
            where: { id },
        });
        return medico;
    }
    catch (error) {
        throw new Error('Erro ao buscar medico: ' + error);
    }
};
exports.getMedicoById = getMedicoById;
const updateMedico = async (id, data) => {
    try {
        const medico = await prisma.medico.update({
            where: { id },
            data,
        });
        return medico;
    }
    catch (error) {
        throw new Error('Erro ao atualizar medico: ' + error);
    }
};
exports.updateMedico = updateMedico;
const deleteMedico = async (id) => {
    try {
        await prisma.medico.delete({
            where: { id },
        });
    }
    catch (error) {
        throw new Error('Erro ao deletar medico: ' + error);
    }
};
exports.deleteMedico = deleteMedico;
