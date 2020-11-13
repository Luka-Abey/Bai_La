const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
    },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
});

module.exports = User = mongoose.model('user', UserSchema.plugin(uniqueValidator));