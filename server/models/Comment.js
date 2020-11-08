const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  commentBody: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);