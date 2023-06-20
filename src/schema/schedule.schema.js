// schema/schedule.schema.js
import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  weekday: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  name: { type: String, required: true },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;