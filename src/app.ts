// src/app.ts
import express from 'express';
import cors from 'cors';
import empresaRoutes from './routes/empresaRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/empresas', empresaRoutes);

export default app;
