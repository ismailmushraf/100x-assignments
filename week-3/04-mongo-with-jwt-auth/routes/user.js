const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const express = require("express");
const { User, Course } = require('../db/index.js');
const SecretPassword = "secret";

router.use(express.json());

// User Routes
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

  const user = User.findOne({
    username,
    password
  });

  if (user) {
    const token = jwt.sign({username: username}, SecretPassword);

    res.json({
      'token': token
    });
  } else {
    res.status(411).send({
      message: "Invalid username or password"
    });
  }
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

  User.updateOne({
    username: username
  }, {
    "$push": {
      purchasedCourses: courseId
    }
  });

  res.json({
    'message': "Course purchased successfully"
  })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const username = req.username;
  const user = await User.findOne({username: username});

  const courses = await Course.find({
    courseId: {
      "$in": user.purchasedCourses
    }
  });

  res.json({
    'purchasedCourses': courses
  });
});

module.exports = router;
