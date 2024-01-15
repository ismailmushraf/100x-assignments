const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index.js');
const express = require('express');

router.use(express.json());

// User Routes
router.post('/signup', (req, res) => {
<<<<<<< HEAD
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password
  });

  res.json({
    'message': 'User created successfully'
  });
});

router.get('/courses', (req, res) => {
  Course.find()
    .then(courses => {
      res.json({
        'courses': courses
      });
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  const courseId = req.params.courseId;
  const course = Course.findOne({
    id: courseId
  });
  if (course) {
    const user = req.user;
    user.purchasedCourses.push(courseId);
    res.json({
      'message': 'Course purchaed successfully'
    });
  } else {
    res.status(404).send("Course Id is not correct.");
  }
=======
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
>>>>>>> 64d59d4b4e10a26511065d31f1ed80be15dc7080
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
  const user = req.user;
  res.json({
    'purchasedCourses': user.purchasedCourses
  });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router
>>>>>>> 64d59d4b4e10a26511065d31f1ed80be15dc7080
