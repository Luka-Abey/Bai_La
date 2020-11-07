const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
});

module.exports = router;