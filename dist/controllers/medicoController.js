"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarMedico = exports.atualizarMedico = exports.buscarMedicoPorId = exports.listarMedicos = exports.criarMedico = void 0;
const medicoRepository = __importStar(require("../repositories/medicoRepository"));
const criarMedico = async (req, res) => {
    try {
        const { nome, email, telefone, cpf } = req.body;
        const novoMedico = await medicoRepository.createMedico({ nome, email, telefone, cpf });
        return res.status(201).json(novoMedico);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.criarMedico = criarMedico;
const listarMedicos = async (req, res) => {
    try {
        const medicos = await medicoRepository.getAllMedicos();
        return res.json(medicos);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.listarMedicos = listarMedicos;
const buscarMedicoPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const medico = await medicoRepository.getMedicoById(id);
        if (!medico)
            return res.status(404).json({ erro: 'Médico não encontrado' });
        return res.json(medico);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.buscarMedicoPorId = buscarMedicoPorId;
const atualizarMedico = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;
        const medicoAtualizado = await medicoRepository.updateMedico(id, dados);
        return res.json(medicoAtualizado);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.atualizarMedico = atualizarMedico;
const deletarMedico = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await medicoRepository.deleteMedico(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.deletarMedico = deletarMedico;
