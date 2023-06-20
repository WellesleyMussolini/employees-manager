import express from 'express';
import { scheduleController } from './controllers/schedule.controller.js';

const router = express.Router();

// Rota para obter todos os horários
router.get('/schedules', scheduleController.get);

// Rota para obter um horário específico pelo ID
router.get('/schedules/:id', scheduleController.getById);

// Rota para criar um novo horário
router.post('/schedules', scheduleController.create);

// Rota para atualizar um horário existente
router.put('/schedules/:id', scheduleController.update);

// Rota para excluir um horário existente
router.delete('/schedules/:id', scheduleController.delete);

export default router;