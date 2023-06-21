// controllers/schedule.controller.js
import Schedule from '../schema/schedule.schema.js';

export const scheduleController = {
    get: async (request, response) => {
        try {
            const schedules = await Schedule.find();
            response.status(200).json(schedules);
        } catch (error) {
            response.status(500).json({ error: 'Failed to fetch schedules' + error });
        }
    },

    getById: async (request, response) => {
        const { id } = request.params;

        try {
            const schedule = await Schedule.findById(id);
            if (!schedule) {
                return response.status(404).json({ error: 'Schedule not found' });
            }
            response.status(200).json(schedule);
        } catch (error) {
            response.status(500).json({ error: 'Failed to fetch schedule' });
        }
    },

    create: async (request, response) => {
        const { weekday, name } = request.body;

        try {
            const schedule = await Schedule.create({ weekday, name });
            response.status(201).json(schedule);
        } catch (error) {
            console.error('Failed to create schedule:', error);
            response.status(500).json({ error: 'Failed to create schedule' });
        }
    },

    update: async (request, response) => {
        const { id } = request.params;
        const { weekday, name } = request.body;

        try {
            const schedule = await Schedule.findByIdAndUpdate(
                id,
                { weekday, name },
                { new: true }
            );
            if (!schedule) {
                return response.status(404).json({ error: 'Schedule not found' });
            }
            response.status(200).json(schedule);
        } catch (error) {
            response.status(500).json({ error: 'Failed to update schedule' });
        }
    },

    delete: async (request, response) => {
        const { id } = request.params;

        try {
            const schedule = await Schedule.findByIdAndDelete(id);
            if (!schedule) {
                return response.status(404).json({ error: 'Schedule not found' });
            }
            response.status(200).json(schedule);
        } catch (error) {
            response.status(500).json({ error: 'Failed to delete schedule' });
        }
    },
};