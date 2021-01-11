const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')


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



const getUserPosts = (user) => {
  Post.find(user.id == user)
    .sort({ date: -1 })
    .then(posts => res.json(posts))
};



router.post('/login', 
  passport.authenticate('local'), 
  async (req, res) => {
  // getUserPosts(req.user)
  // here would be the redirect
  res.json({success: true, hello: 'hello', user: req.user})
  
})



router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(500).json({ success: false, error: err }))
})



module.exports = router
