const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Add course
router.post('/', async (req, res) => {
  const course = new Course(req.body);
  try {
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

// Modify course
router.patch('/:courseId', async (req, res) => {
  try {
    const updatedCourse = await Course.updateOne(
      { _id: req.params.courseId },
      { $set: req.body }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
