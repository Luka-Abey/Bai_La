const express = require('express')
const mongoose = require('mongoose')
const posts = require('./api/posts')
const comments = require('./api/comments')
const users = require('./api/users')
const app = express()
const cors = require('cors')
const port = 5000
const session = require('express-session')

app.use(session({ secret: 'notagoodsecret' }))

// Connect DB
const db = require('./keys.js').mongoURI

// Avoid CORS error
app.use(cors({ origin: true }))

// BodyParser
app.use(express.json())

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

// API routes
app.use('/api/users', users)
app.use('/api/comments', comments)
app.use('/api/posts', posts)

app.listen(port, () => console.log(`Server started on port: ${port}`))
