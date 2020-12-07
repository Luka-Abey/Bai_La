const express = require('express')
const mongoose = require('mongoose')
const posts = require('./api/posts')
const comments = require('./api/comments')
const users = require('./api/users')
const app = express()
const cors = require('cors')
const port = 5000
const session = require('express-session')
const url = 'http://localhost:8080'
const passport = require('passport')
const localStrategy = require('passport-local')
const UserSchema = require('./models/User')

// sort deprecation warnings
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(
  session({
    secret: 'notagoodsecret',
    resave: false,
    saveUninitialized: false
    // cookie: { maxAge: 1000 * 60 * 60, secure: true }
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(UserSchema.createStrategy())

passport.serializeUser(UserSchema.serializeUser())

passport.deserializeUser(UserSchema.deserializeUser())

// Connect DB
const db = require('./keys.js').mongoURI

// Avoid CORS error
app.use(
  cors({
    origin: [url],
    credentials: true
    // exposedHeaders: ['set-cookie']
  })
)

// BodyParser
app.use(express.json())

mongoose
  .connect(db)
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

// API routes
app.use('/api/users', users)
app.use('/api/comments', comments)
app.use('/api/posts', posts)

app.listen(port, () => console.log(`Server started on port: ${port}`))
