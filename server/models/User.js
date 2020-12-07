const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
  // username: {
  //   type: String,
  //   required: [true, 'Username required. Please enter a username'],
  //   trim: true,
  //   unique: true
  //   },
  // password: {
  //   type: String,
  //   required: [true, 'Password required. Please enter a password'],
  //   minlength: [6, 'Minimum password length is 6 characters']
  // },
  email: {
    type: String,
    required: [true, 'Email required. Please enter a valid email'],
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true,
    validate: [isEmail, 'Please enter a valid email']
  }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('user', UserSchema.plugin(uniqueValidator));