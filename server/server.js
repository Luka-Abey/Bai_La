const express = require('express');
const mongoose = require('mongoose');
const posts = require('./api/posts');
const users = require('./api/users');
const app = express()
const port = 5000

app.use(express.json());
app.use('/api/posts', posts);
app.use('/api/users', users);

const db = require('./keys.js').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

app.listen(port, () => console.log(`Server started on port: ${port}`))