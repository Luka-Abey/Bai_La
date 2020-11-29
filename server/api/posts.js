const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const showdown = require('showdown');

converter = new showdown.Converter();

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
});

router.post('/', (req, res) => {
  const newPost = new Post({
    user: req.body.user,
    postBody: converter.makeHtml(req.body.postBody),
    video: `<iframe src=https://www.youtube.com/embed/${req.body.video} frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>`
  });
  newPost.save().then(post => res.json(post));
});

router.put('/:id', (req, res) => {
  var conditions = { _id : req.params.id };
    Post.updateOne(conditions, req.body).then(doc => {
        if (!doc){
            return res.status(404).end();
        }
        else{
            return res.status(200).json(doc);
        }
    }).catch(err => next(err));
  // Post.findById(req.params.id)
  //   .then(post =>
  //     post.update)
})

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => 
      post.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(500).json({ success: false }));
})

module.exports = router;