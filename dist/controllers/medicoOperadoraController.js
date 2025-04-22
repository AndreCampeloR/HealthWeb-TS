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
exports.removerVinculo = exports.buscarMedicosPorOperadora = exports.buscarOperadorasPorMedico = exports.vincularMedicoOperadora = void 0;
const medicoOperadoraRepository = __importStar(require("../repositories/medicoOperadoraRepository"));
const vincularMedicoOperadora = async (req, res) => {
    try {
        const { medicoId, operadoraId } = req.body;
        const novoVinculo = await medicoOperadoraRepository.createVinculo({ medicoId, operadoraId });
        return res.status(201).json(novoVinculo);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.vincularMedicoOperadora = vincularMedicoOperadora;
const buscarOperadorasPorMedico = async (req, res) => {
    try {
        const medicoId = parseInt(req.params.medicoId);
        const vinculos = await medicoOperadoraRepository.getOperadorasByMedico(medicoId);
        return res.json(vinculos);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.buscarOperadorasPorMedico = buscarOperadorasPorMedico;
const buscarMedicosPorOperadora = async (req, res) => {
    try {
        const operadoraId = parseInt(req.params.operadoraId);
        const vinculos = await medicoOperadoraRepository.getMedicosByOperadora(operadoraId);
        return res.json(vinculos);
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.buscarMedicosPorOperadora = buscarMedicosPorOperadora;
const removerVinculo = async (req, res) => {
    try {
        const { medicoId, operadoraId } = req.body;
        await medicoOperadoraRepository.deleteVinculo({ medicoId, operadoraId });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};
exports.removerVinculo = removerVinculo;
