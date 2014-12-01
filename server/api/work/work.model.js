'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkSchema = new Schema({
  _id: String,
  title: String,
  year: Number,
  hidden: Boolean,
  dimensions: String,
  description: String,
  media: String,
  photo_main: String,
  photo_thumb: String,
  // photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }]
  photos: [String],
});

module.exports = mongoose.model('Work', WorkSchema);