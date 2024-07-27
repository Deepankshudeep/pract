const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

// Remove student
router.delete('/:studentId', async (req, res) => {
  try {
    const removedStudent = await Student.remove({ _id: req.params.studentId });
    res.json(removedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

// Modify student
router.patch('/:studentId', async (req, res) => {
  try {
    const updatedStudent = await Student.updateOne(
      { _id: req.params.studentId },
      { $set: req.body }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
