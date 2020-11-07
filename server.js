const express = require('express')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 5000

app.use(express.json());

const db = require('keys.js').mongoURI;

mongoose.connect(db)
  .then(() => console.log('Mongo db connected...'))

app.listen(port, () => console.log(`Server started on port: ${port}`))