const express = require('express');
const router = express.Router();
const User = require('../models/User');
const router = require('./posts');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
});

router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
})