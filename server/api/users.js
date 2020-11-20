const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const checkAuth = require('../middleware/check-auth');

// const handleError = (err) => {
//   console.log(err.message)
// }


router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
});

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
      newUser.save()
        .then(result => {
          res.status(201).json({success: true, result});
        })
        .catch(err => res.status(500).json({ success: false, err: err}));
    }
  })
});

router.post('/login', (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(user.length < 1){
        return res.status(401).json({
          message: 'not authorised'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'not authorised'
          });
        }
        if (result) {
          const token = jwt.sign({
            email: user[0].email,
            user: user[0]._id
          }, 
          'secret', 
          );
          return res.status(200).json({
            message: 'authorised',
            token: token
          });
        }
        res.status(401).json({
        message: 'not authorised'
        })
      })
    })
})

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => 
      user.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(500).json({ success: false }));
})

module.exports = router;