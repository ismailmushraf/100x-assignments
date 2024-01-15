const { Router } = require("express");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const express = require('express');

const { Admin, Course } = require('../db/index.js');
const adminMiddleware = require("../middleware/admin");
const SecretPassword = "secret";

const router = Router();
router.use(express.json());

// Admin Routes
<<<<<<< HEAD
router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await Admin.findOne({username: username});

  if(existingUser) {
    return res.status(400).send("Admin with same Username already exists");
  }
  
  Admin.create({
    username,
    password
  });

  res.json({ 
    message: 'Admin created successfully'
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
      })
    })
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
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
