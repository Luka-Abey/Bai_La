const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const checkAuth = require('../middleware/check-auth');
// functions
const findAndValidate = async (username, password) => {
  const user = await User.find({ username })
  if (user.length > 0) {
    const isValid = await bcrypt.compare(password, user[0].password)
    return isValid ? user : false
  } else {
    return false
  }
}

// routes
router.get('/', (req, res) => {
  User.find().then(users => res.json(users))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then(users => res.json(users))
})

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      })
      newUser
        .save()
        .then(result => {
          res.status(201).json({ success: true })
        })
        .catch(err => res.status(500).json({ success: false }))
    }
  })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = (await findAndValidate(username, password)(user)) ? (res.status(200), user) : (res.status(401), false)
})

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(500).json({ success: false }))
})

module.exports = router
