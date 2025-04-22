"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const empresaRoutes_1 = __importDefault(require("./routes/empresaRoutes"));
const operadoraRoutes_1 = __importDefault(require("./routes/operadoraRoutes"));
const medicoRoutes_1 = __importDefault(require("./routes/medicoRoutes"));
const medicoOperadoraRoutes_1 = __importDefault(require("./routes/medicoOperadoraRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/empresas', empresaRoutes_1.default);
app.use('/operadoras', operadoraRoutes_1.default);
app.use('/medicos', medicoRoutes_1.default);
app.use('/medicoOperadora', medicoOperadoraRoutes_1.default);
exports.default = app;
