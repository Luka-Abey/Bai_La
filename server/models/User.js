const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
    // UNIQUE - WHERE DO WE CHECK THIS??
    // AT THE EMAIL?? unique usernames makes more sense
    },
  password: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model('post', PostSchema);