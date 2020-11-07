const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User;



const PostSchema = new Schema({
  // user: {
  //   type: String,
  //   required: true
  // },
  // comment: {
  //   type: String,
  //   required: false
  // },
  date: {
    type: Date,
    default: Date.now
  },
  postBody: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model('post', PostSchema);