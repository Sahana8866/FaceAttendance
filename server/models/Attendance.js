import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent'], required: true },
  location: { type: String },
  faceData: { type: String }, // Placeholder for face recognition data
});

export default mongoose.model('Attendance', attendanceSchema);
