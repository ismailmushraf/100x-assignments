const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index.js')
const express = require("express");
const { v4: uuidv4 } = require('uuid');

router.use(express.json());

// Admin Routes
router.post('/signup', (req, res) => {
<<<<<<< HEAD
  const username = req.body.username;
  const password = req.body.password;
  
Admin.create({
    username,
    password
  });

  res.json({
    'message': 'Admin created successfully'
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  const id = uuidv4();
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  Course.create({
    id,
    title, 
    description,
    price, 
    imageLink
  });

  res.json({
    'message': 'Course created successfully',
    'courseId': id
  });
});

router.get('/courses', adminMiddleware, (req, res) => {
  Course.find()
    .then(courses => {
      res.json({
        'courses': courses
      });
    });
=======
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> 64d59d4b4e10a26511065d31f1ed80be15dc7080
});

module.exports = router;
