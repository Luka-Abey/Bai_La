const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const showdown = require('showdown')
const User;

converter = new showdown.Converter();

const PostSchema = new Schema({
  user: {
    type: User,
    required: true
  },
  post: {
    type: String,

  }

})