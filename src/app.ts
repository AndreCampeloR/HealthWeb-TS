import express from 'express';
import cors from 'cors';
import empresaRoutes from './routes/empresaRoutes';
import operadoraRoutes from './routes/operadoraRoutes';
import medicoRoutes from './routes/medicoRoutes';
import medicoOperadoraRoutes from './routes/medicoOperadoraRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/empresas', empresaRoutes);
app.use('/operadoras', operadoraRoutes);
app.use('/medicos', medicoRoutes);
app.use('/medicoOperadora', medicoOperadoraRoutes);

export default app;
