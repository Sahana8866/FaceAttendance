import express from 'express';
import Attendance from '../models/Attendance.js';
import User from '../models/User.js';

const router = express.Router();

// Mark attendance
router.post('/mark', async (req, res) => {
  const { userId, date, status, location, faceData } = req.body;
  try {
    const attendance = new Attendance({ user: userId, date, status, location, faceData });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get attendance for user
router.get('/user/:id', async (req, res) => {
  try {
    const records = await Attendance.find({ user: req.params.id }).populate('user');
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
