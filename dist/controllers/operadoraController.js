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
exports.deletarOperadora = exports.atualizarOperadora = exports.buscarOperadoraPorId = exports.listarOperadoras = exports.criarOperadora = void 0;
const operadoraRepository = __importStar(require("../repositories/operadoraRepository"));
const criarOperadora = async (req, res) => {
    try {
        const { nome, empresaId } = req.body;
        const novaOperadora = await operadoraRepository.createOperadora({ nome, empresaId });
        return res.status(201).json(novaOperadora);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.criarOperadora = criarOperadora;
const listarOperadoras = async (req, res) => {
    try {
        const operadoras = await operadoraRepository.getAllOperadoras();
        return res.json(operadoras);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.listarOperadoras = listarOperadoras;
const buscarOperadoraPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const operadora = await operadoraRepository.getOperadoraById(id);
        if (!operadora)
            return res.status(404).json({ erro: 'Operadora não encontrada' });
        return res.json(operadora);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.buscarOperadoraPorId = buscarOperadoraPorId;
const atualizarOperadora = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;
        const operadoraAtualizada = await operadoraRepository.updateOperadora(id, dados);
        return res.json(operadoraAtualizada);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.atualizarOperadora = atualizarOperadora;
const deletarOperadora = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await operadoraRepository.deleteOperadora(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.deletarOperadora = deletarOperadora;
