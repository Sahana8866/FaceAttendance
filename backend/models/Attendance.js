const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent'], required: true },
  type: { type: String, enum: ['student', 'lecturer'], required: true },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
