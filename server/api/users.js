const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return 'redirect'
  }
  next()
}



router.get('/views', async (req, res) => {
  if (req.session.views) {
    req.session.views++
    console.log('yes')
  } else {
    req.session.views = 1
    console.log('no')
  }
  const views = req.session.views
  res.json({ views })
})



router.get('/', (req, res) => {
  User.find().then(users => res.json(users))
})



router.get('/:id', (req, res) => {
  User.findById(req.params.id).then(users => res.json(users))
})



router.post('/signup', async (req, res) => {
  try {
    const{username, password, email} = req.body
    const user = new User({
      username,
      email
    })
    const registeredUser = await User.register(user, password)
  }
  catch(err){
    console.log(err)
    res.send(err)
  }
})



const findAndValidate = async (username, password) => {
  const user = await User.find({ username })
  if (user.length > 0) {
    const isValid = await bcrypt.compare(password, user[0].password)
    return isValid ? user : false
  } else {
    return false
  }
}

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = (await findAndValidate(username, password)(user)) ? (res.status(200), user) : (res.status(401), false)
  if (user) {
    req.session.user_id = user._id // creates a user id in the session
        res.redirect('/')
  } else {
        res.redirect('/login')
  }
})



router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(500).json({ success: false }))
})



module.exports = router
