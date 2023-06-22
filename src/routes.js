import express from 'express';
import { scheduleController } from './controllers/schedule.controller.js';

const router = express.Router();

router.get('/schedules', scheduleController.get);

router.get('/schedules/:id', scheduleController.getById);

router.post('/schedules', scheduleController.create);

router.put('/schedules/:id', scheduleController.update);

router.delete('/schedules/:id', scheduleController.delete);

router.delete('/schedules', scheduleController.deleteAll);

export default router;