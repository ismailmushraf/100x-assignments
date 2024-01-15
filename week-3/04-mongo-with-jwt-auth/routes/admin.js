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
});

module.exports = router;
