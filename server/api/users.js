const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
});

router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hash(req.body.password, 10)
  });
  newUser.save().then(post => res.json(post));
});


router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => 
      user.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;