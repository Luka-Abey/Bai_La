const e = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User;

// const showdown = require('showdown')
// converter = new showdown.Converter();

// app.post("/convert", function(req, res, next) {
//   if(typeof req.body.content == 'undefined' || req.body.content == null) {
//       res.json(["error", "No data found"]);
//   } else {
//       text = req.body.content;
//       html = converter.makeHtml(text);
//       res.json(["markdown", html]);
//   }
// });


const PostSchema = new Schema({
  user: {
    type: User,
    required: true
  },
  postBody: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: false
  }
});

module.exports = Post = mongoose.model('post', PostSchema);