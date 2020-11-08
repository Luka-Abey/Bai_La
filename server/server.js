const express = require('express');
const mongoose = require('mongoose');
const posts = require('./api/posts');
const comments = require('./api/comments');
const users = require('./api/users');
const app = express();
const cors = require('cors');
const port = 5000

// Connect DB
const db = require('./keys.js').mongoURI;

mongoose
  .connect(db, { })
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

// API routes
app.use(express.json());
app.use('/api/users', users);
app.use('/api/comments', comments);
app.use('/api/posts', posts);
app.use(cors({origin:true}));


app.listen(port, () => console.log(`Server started on port: ${port}`))