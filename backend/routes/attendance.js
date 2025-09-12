const express = require('express');
const Attendance = require('../models/Attendance');
const router = express.Router();

// Mark attendance
router.post('/', async (req, res) => {
  try {
    const { userId, date, status, type } = req.body;
    const attendance = new Attendance({ user: userId, date, status, type });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get attendance by user
router.get('/user/:userId', async (req, res) => {
  try {
    const records = await Attendance.find({ user: req.params.userId });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all attendance
router.get('/', async (req, res) => {
  try {
    const records = await Attendance.find().populate('user', 'name email role');
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
