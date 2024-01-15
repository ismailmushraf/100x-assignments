const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const express = require("express");
const { User, Course } = require('../db/index.js');
const SecretPassword = "secret";

router.use(express.json());

// User Routes
<<<<<<< HEAD
router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await User.findOne({username: username});

  if (existingUser) {
    return res.status(400).send("User with same username exists. Please Sign in.");
  }

  User.create({
    username, 
    password
  });

  res.json({
    'message': 'User created successfully'
  });
});

router.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const token = jwt.sign({username: username}, SecretPassword);

  res.json({
    'token': token
  });
});

router.get('/courses', userMiddleware, (req, res) => {
  Course.find()
    .then(courses => {
      res.json({
        'courses': courses
      });
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  const username = req.username;
  const courseId = req.params.courseId;

  const user = await User.findOne({username: username});
  user.purchasedCourses.push(courseId);
  user.save();

  res.json({
    'message': "Course purchased successfully"
  })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const username = req.username;
  const user = await User.findOne({username: username});

  const purchasedCourses = [];
  const courses = await Course.find();
  courses.forEach(course => {
    if (user.purchasedCourses.includes(course.id)) {
      purchasedCourses.push(course); 
    }
  });

  res.json({
    'purchasedCourses': purchasedCourses
  });
});

module.exports = router;
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> 64d59d4b4e10a26511065d31f1ed80be15dc7080
