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
exports.deletarEmpresa = exports.atualizarEmpresa = exports.buscarEmpresaPorId = exports.listarEmpresas = exports.criarEmpresa = void 0;
const empresaRepository = __importStar(require("../repositories/empresaRepository"));
const criarEmpresa = async (req, res) => {
    try {
        const { cnpj, nome, email, senha, telefone } = req.body;
        const novaEmpresa = await empresaRepository.createEmpresa({ cnpj, nome, email, senha, telefone });
        return res.status(201).json(novaEmpresa);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.criarEmpresa = criarEmpresa;
const listarEmpresas = async (req, res) => {
    try {
        const empresas = await empresaRepository.getAllEmpresas();
        return res.json(empresas);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.listarEmpresas = listarEmpresas;
const buscarEmpresaPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const empresa = await empresaRepository.getEmpresaById(id);
        if (!empresa)
            return res.status(404).json({ erro: 'Empresa não encontrada' });
        return res.json(empresa);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.buscarEmpresaPorId = buscarEmpresaPorId;
const atualizarEmpresa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;
        const empresaAtualizada = await empresaRepository.updateEmpresa(id, dados);
        return res.json(empresaAtualizada);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.atualizarEmpresa = atualizarEmpresa;
const deletarEmpresa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await empresaRepository.deleteEmpresa(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.deletarEmpresa = deletarEmpresa;
